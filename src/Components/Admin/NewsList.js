import {useSelector} from 'react-redux'

import {Button, Input} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";
function NewsList() {


  const {news} = useSelector((state) => state.result )
  const removeReport = () =>{
    
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
            <tr>
            <th scope="row">{report.id}</th>
            <td>{report.date}</td>
            <td>{report.Desciription}</td>
            <td>{report.category}</td>
            <td>{report.location}</td>
            <td>
                <Button
                  color="danger"
                  onClick={() => removeReport() }
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
