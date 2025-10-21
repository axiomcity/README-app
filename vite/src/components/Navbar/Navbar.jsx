import { useState } from 'react';
import logo from './logo.png';
import burger from './burger.png';

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <nav>
            <h1>NOTES COLLABORATIVES</h1>
            <p>Partagez vos idées et collaborez en temps réel, grace a NOTEME.</p>

            <table>
                <caption>
                    Récapitulatif des groupes punk les plus célèbres du Royaume-Uni
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Groupe</th>
                        <th scope="col">Année de formation</th>
                        <th scope="col">Nombre d'albums</th>
                        <th scope="col">Morceau le plus célèbre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Buzzcocks</th>
                        <td>1976</td>
                        <td>9</td>
                        <td>
                            <i lang="en">Ever fallen in love (with someone you shouldn't've)</i>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">The Clash</th>
                        <td>1976</td>
                        <td>6</td>
                        <td><i lang="en">London Calling</i></td>
                    </tr>

                    <!-- quelques lignes supprimées pour condenser le texte -->

                    <tr>
                        <th scope="row">The Stranglers</th>
                        <td>1974</td>
                        <td>17</td>
                        <td><i lang="en">No More Heroes</i></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colspan="2">Nombre total d'albums</th>
                        <td colspan="2">77</td>
                    </tr>
                </tfoot>
            </table>


        </nav>
    );
}

export default Navbar;