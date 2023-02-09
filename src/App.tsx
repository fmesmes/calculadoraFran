import React, { useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonSplitPane,
  IonMenu,
  IonButton,
  IonButtons,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

import { home, logOut, menu, search } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
let num1 = '';
let num2 = '';
let result = '';
let mostrarResultado = false;

const App: React.FC = () => {
  const [signo, setSigno] = useState<String | null>('');
  const [resultado, setResultado] = useState<String | number>('0');

  const getNumero = (numero: string) => {
    if (mostrarResultado == true) {
      mostrarResultado = false;
      limpiar();
    }
    if (signo == '') {
      num1 = num1 + numero;
      result = num1;
      setResultado(result);
    } else if (signo != '') {
      num2 += numero;
      result += numero;
      setResultado(result);
    }
  };
  const ponerSigno = (sing: string) => {
    if (num2 == '') {
      let sfin = num1 + sing;
      setSigno(sing);
      result = sfin;
      setResultado(result);
    }
  };
  const limpiar = () => {
    num1 = '';
    num2 = '';
    setResultado('');
    setSigno('');
  };
  const hacerOperacion = () => {
    if (signo == '+') {
      let salida = parseInt(num1) + parseInt(num2);
      setResultado(salida);
      mostrarResultado = true;
    } else if (signo == '-') {
      let salida = parseInt(num1) - parseInt(num2);
      setResultado(salida);
      mostrarResultado = true;
    } else if (signo == 'x') {
      let salida = parseInt(num1) * parseInt(num2);
      setResultado(salida);
      mostrarResultado = true;
    } else if (signo == ':') {
      let salida = parseInt(num1) / parseInt(num2);
      setResultado(salida);
      mostrarResultado = true;
    }
  };

  return (
    <IonApp>
      <IonSplitPane when="sm" contentId="main-content">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>
              <IonListHeader>Navigate</IonListHeader>
              <IonMenuToggle autoHide={false}>
                <IonItem button>
                  <IonIcon slot="start" icon={home}></IonIcon>
                  <IonLabel>Normal</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon slot="start" icon={search}></IonIcon>
                  <IonLabel>Avanzada</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonIcon slot="start" icon={logOut}></IonIcon>
                  <IonLabel>Moneda</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

        <div className="ion-page" id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuToggle>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={menu}></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonButtons>
              <IonTitle>Header</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonRow>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {resultado}
                  </IonRow>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol onClick={() => getNumero('7')}>7</IonCol>
                <IonCol onClick={() => getNumero('8')}>8</IonCol>
                <IonCol onClick={() => getNumero('9')}>9</IonCol>
                <IonCol onClick={() => ponerSigno(':')}>:</IonCol>
              </IonRow>
              <IonRow>
                <IonCol onClick={() => getNumero('4')}>4</IonCol>
                <IonCol onClick={() => getNumero('5')}>5</IonCol>
                <IonCol onClick={() => getNumero('6')}>6</IonCol>
                <IonCol onClick={() => ponerSigno('x')}>x</IonCol>
              </IonRow>
              <IonRow>
                <IonCol onClick={() => getNumero('1')}>1</IonCol>
                <IonCol onClick={() => getNumero('2')}>2</IonCol>
                <IonCol onClick={() => getNumero('3')}>3</IonCol>
                <IonCol onClick={() => ponerSigno('-')}>-</IonCol>
              </IonRow>
              <IonRow>
                <IonCol onClick={() => limpiar()}>C</IonCol>
                <IonCol onClick={() => getNumero('0')}>0</IonCol>
                <IonCol onClick={() => hacerOperacion()}>=</IonCol>
                <IonCol onClick={() => ponerSigno('+')}>+</IonCol>
              </IonRow>
            </IonGrid>{' '}
          </IonContent>
        </div>
      </IonSplitPane>
    </IonApp>
  );
};
export default App;
