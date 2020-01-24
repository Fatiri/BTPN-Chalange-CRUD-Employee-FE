import React, {Component} from 'react';

class Footer extends Component {
    render() {
        var creditsyear = new Date();
        return (
            <footer className="page-footer mt-4">
                <div className="footer-copyright text-center light-blue py-3">
                    © {creditsyear.getFullYear()} Copyright :
                    <a href="https://facebook.com/idam.hamdani.5"> Ilham Fatiri</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
