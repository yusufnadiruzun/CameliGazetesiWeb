function AddNewReport() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Haber Başlığı</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Haber Başlığı"
          ></input>
        </div>
        <div className="form-group mt-4">
          <label for="exampleFormControlSelect1">Kategori</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Son Dakika</option>
            <option>Spor</option>
            <option>Ekonomi</option>
            <option>Magazin</option>
            <option>Teknoloji</option>
            <option>Sağlık</option>
          </select>
        </div>
        <div className="form-group mt-4">
          <label for="exampleFormControlSelect2">Yer</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Denizli</option>
            <option>Burdur</option>
            <option>Muğla</option>
            <option>Aydın</option>
            <option>Denizli</option>
          </select>
        </div>
        <div className="form-group mt-4">
          <label for="exampleFormControlTextarea1">Haber İçeriği</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div> 
            <button  style={{ marginLeft:'60%',width: "40%" }}
                onClick={{}}
                type="button"
                className="btn btn-outline-primary mt-3"> Haber Ekle</button>
        </div>
      </form>
    </div>
  );
}
export default AddNewReport;
