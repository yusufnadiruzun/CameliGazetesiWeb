import {useSelector,useDispatch} from 'react-redux'
import {Button} from 'reactstrap'
import {removeReport} from '../../redux/actionTypes'

function NewsList() {


  const {news} = useSelector((state) => state.result )
  const dispatch = useDispatch();
  
  const remove = (id) =>{
    dispatch(removeReport(id));
  }
  
  return (
    <div>
      <table className="table">
        <thead>

          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tarih</th>
            <th scope="col">Başlık</th>
            <th scope="col">Kategori</th>
            <th scope="col">Şehir</th>
          </tr>
        </thead>
        <tbody>
          {news.map(report =>
            <tr key= {report.id}>
            <th scope="row">{report.id} </th>
            <td>{report.date}</td>
            <td>{report.Desciription}</td>
            <td>{report.category}</td>
            <td>{report.location}</td>
            <td>
                <Button
                  color="danger"
                  onClick={() => remove(report.id) }
                >
                  Sil
                </Button>
              </td>
          </tr>
            )}
          
        
        </tbody>
      </table>
    </div>
  );
}
export default NewsList;
