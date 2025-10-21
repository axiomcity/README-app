import '../../../assets/style.css';
import bg from './bg.webp';
import ico from './pen.png';

function Index() {

    return (
        <nav className='container'>
            <img className='bg' src={bg} alt="bg noteme app" />
            <div className='content'>
                <table >
                    <caption>
                        Récapitulatif des taches.
                    </caption>
                    <thead>
                        <tr>
                            <th className='th-title' scope="col">TASK ID</th>
                            <th className='th-title' scope="col">PEOPLE ON</th>
                            <th className='th-title' scope="col">MSG</th>
                            <th className='th-title' scope="col">STATUS</th>
                            <th className='th-title' scope="col">FICHIERS</th>
                            <th className='th-title' scope="col">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='task1 color1'>
                            <td scope="row">Buzzcocks</td>
                            <td>NOTA</td>
                            <td>9</td>
                            <td>finished</td>
                            <td>deposer</td>
                            <td><button type='checkbox'><img className='icopen' src={ico} alt="edit" /></button></td>
                        </tr>
                        <tr className='task2 color2'>
                            <td scope="row">The Clash</td>
                            <td>NOTA</td>
                            <td>6</td>
                            <td>finished</td>
                            <td>deposer</td>
                            <td><button type='checkbox'><img className='icopen' src={ico} alt="edit" /></button></td>
                        </tr>

                        <tr className='task1 color1'>
                            <td scope="row">The Stranglers</td>
                            <td>DAVIDOS</td>
                            <td>17</td>
                            <td>Not started</td>
                            <td>deposer</td>
                            <td><button type='checkbox'><img className='icopen' src={ico} alt="edit" /></button></td>
                        </tr>

                        <tr className='task2 color2'>
                            <td scope="row">The Stranglers</td>
                            <td>SOONAEKOO</td>
                            <td>17</td>
                            <td>Not started</td>
                            <td>deposer</td>
                            <td><button type='checkbox'><img className='icopen' src={ico} alt="edit" /></button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colspan="2">Nombre total de fichiers</th>
                            <td colspan="">77</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </nav>
    );
}

export default Index;