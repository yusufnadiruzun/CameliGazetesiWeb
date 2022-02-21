import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
export default class NaviCategory extends Component {

 ColoblackLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
  render() {
    return (
      <div style={{display:'flex'}} >
      <div className='row'>
      <div className='container col-sm-12 col-lg-6' >
      <div style={{marginTop: '20px'}}>
        
      <ul className="nav nav-pills">
      <li className="nav-item" style={{marginLeft:'30px'}} >
        <a className="nav-link " id='nvSon'href="#">Son Dakika</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  id='nv' href="#">Spor</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" id='nv' href="#">Ekonomi</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link" id='nv' href="#" >Magazin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  id='nv' href="#">Teknoloji</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link"  id='nv' href="#">Sağlık</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link"  id='nv' href="#">Çameli</a>
      </li>
      <li className="nav-item" >
        <a className="nav-link"  id='nv' href="#">Denizli</a>
      </li>
    </ul>
    </div>
    </div>
    </div>
    <div className='row'>
      <div className='rates container col-sm-12 col-lg-6' >
      <div> <ul className='rate'>
        <li style={{color:'black'}}>Dolar</li>
        <li>13.12</li>
        </ul>  </div>
      <div><ul className='rate'>
        <li style={{color:'black'}}>Euro</li>
        <li>15.66</li>
        </ul></div>
      <div><ul className='rate' >
        <li style={{color:'black'}}>Altın</li>
        <li>792</li>
        </ul></div>
      <div><ul className='rate'>
        <li style={{color:'black'}}>Bitcoin</li>
        <li>33.000</li>
        </ul></div>
     
    </div>
    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      </div>
      </div>
    )
  }
}
