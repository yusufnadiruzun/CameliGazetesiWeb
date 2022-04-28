import {useNavigate} from 'react-router-dom'

function CategoryList() {
  const navigate = useNavigate()

    const goToNewsList = () =>{
      let url = '/cameligazetesi.com/admin/NewsList'
      navigate(url)
    }
    const goToAddReport = () =>{
      let url = '/cameligazetesi.com/admin/AddReport'
      navigate(url)
    }
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item" onClick={() => goToNewsList()} >Haberler</li>
        <li className="list-group-item" onClick={()=> goToAddReport()}>Yeni Haber Ekle</li>
      </ul>
    </div>
  );
}

export default CategoryList;
