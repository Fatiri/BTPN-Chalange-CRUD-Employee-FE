import React, {Component} from 'react';
import {connect} from 'react-redux';

class LandingPage extends Component {
    render() {
        return (
            <div id="carousel-example-2" className="carousel slide carousel-fade position-relative"
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-2" data-slide-to="0" className="active"/>
                    <li data-target="#carousel-example-2" data-slide-to="1"/>
                    <li data-target="#carousel-example-2" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <img className="d-block w-100"
                                 src="https://i.ytimg.com/vi/XQnyXOGzDc8/maxresdefault.jpg"
                                 alt="First slide"/>
                            <div className="mask rgba-black-light"/>
                        </div>
                        <div className="carousel-caption">
                            <h3 className="h3-responsive">Misi</h3>
                            <p>Menawarkan solusi dan layanan keuangan yang lengkap ke berbagai segmen ritel, mikro, UKM dan korporat bisnis di Indonesia, serta untuk Bangsa dan Negara Indonesia secara keseluruhan; Memberikan kesempatan berharga bagi pertumbuhan profesional karyawan Bank BTPN; Menciptakan nilai yang signifikan dan berkesinambungan bagi stakeholder termasuk masyarakat Indonesia; Memanfaatkan inovasi teknologi sebagai pembeda utama untuk memberikan kualitas dan pengalaman terbaik dikelasnya kepada nasabah dan mitra Bank BTPN.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src="https://i.ytimg.com/vi/XQnyXOGzDc8/maxresdefault.jpg"
                                 alt="Second slide"/>
                            <div className="mask rgba-black-strong"/>
                        </div>
                        <div className="carousel-caption">
                            <h3 className="h3-responsive">Visi</h3>
                            <p>Menjadi bank pilihan utama di Indonesia, yang dapat memberikan perubahan berarti dalam kehidupan jutaan orang, terutama dengan dukungan teknologi digital.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <img className="d-block w-100" src="https://i.ytimg.com/vi/XQnyXOGzDc8/maxresdefault.jpg"
                                 alt="Third slide"/>
                            <div className="mask rgba-black-slight"/>
                        </div>
                        <div className="carousel-caption">
                            <h3 className="h3-responsive">Nilai-nilai</h3>
                            <p>Customer-centric: Fokus pada kepentingan stakeholder

                                Proaktif & Inovatif: Berani bertindak dan berinovasi tanpa henti

                                Gesit (Agile): Merangkul perubahan dan bergerak cepat

                                Mencapai Yang Terbaik: Menjaga dan memberikan kualitas layanan terbaik

                                Sinergi: Berkolaborasi sebagai satu tim</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default LandingPage;
