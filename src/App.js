import React from "react";
import logo from './logo.svg';
import './App.css';

// const Header = (props) => {
//     return (
//         <header>
//             <h1>Title</h1>
//             <button>cart</button>
//             {props.children}
//         </header>
//     )
// }

class Header extends React.Component {
    render() {
        const counterItemsInCart = 0;

        return (
            <header>
                {
                    this.props.title && <h1>Title{this.props.title}</h1>
                }
                 {
                    this.props.fn && <h2>fn {this.props.fn()}</h2>
                }

                <button>cart {counterItemsInCart}</button>
                {this.props.children}
                {this.props.fn}
            </header>
        )
    }
}

function App({test, fn}) {
    // console.log(fn);
    // console.log(fn());

    const test1 = () => (
        <h1>!!!</h1>
    )
    const test2 = <h1>!!!!!</h1>

    const check = () => {
        if (false) {

        } else {
            return 321;
        }
    }

    const condRender = () => 2 > Math.random() * 5 && <h2>condRender</h2>


    return (
        <div className="App">
            {2 > 3 ? 'hello' : 'world'}
            {test1()}
            {test2}
            {check()}

            {/*{(() =>{*/}
            {/*   if (2> Math.random()*50){*/}
            {/*       return 'bigger'*/}
            {/*   } else {*/}
            {/*       return 'smaller'*/}
            {/*   }*/}
            {/*})()}*/}

            {2 > Math.random() * 5 ? <h2>H2</h2> : null}
            {2 > Math.random() * 5 && <h2>H2</h2>}
            {condRender()}

            <Header title={test}/>
            <hr/>
            <Header fn={fn}>
                test
            </Header>
        </div>
    );
}

export default App;
