import React from 'react'

class Footer extends React.Component {
    render() {
        return <footer className="page-footer indigo darken-1">

                    <div className="footer-copyright">
                        <div className="container">
                            © {new Date().getFullYear()} Nazar Kinasevych (OKG)
                            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                        </div>
                    </div>

            </footer>
    }
}

export {Footer}