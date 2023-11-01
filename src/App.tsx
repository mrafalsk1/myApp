import { Redirect, Route } from "react-router-dom"
import {
  IonApp,
  IonButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonLoading,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  setupIonicReact,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { ellipse, square, triangle } from "ionicons/icons"
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"
import "./app.css"
import { useCallback, useState } from "react"

setupIonicReact()

const App: React.FC = () => {
  const [image, setImage] = useState("https://pic.re/image")
  const [loading, setLoading] = useState(false)

  function getImage() {
    console.log("al")

    setLoading(true)
    const timestamp = new Date().getTime()
    const imageUrl = `https://pic.re/image/${timestamp}`
    setImage(imageUrl)
    setLoading(false)
  }

  return (
      <IonGrid>
        <IonRow>
          <IonTitle className="ion-no-padding">Bem-vindo ao Meu Site</IonTitle>
        </IonRow>
        <IonRow className="ion-margin-top">
          <IonText>Este é um parágrafo exemplo</IonText>
        </IonRow>
        <IonRow>
          <IonButton onClick={() => alert("olá")}>Clique aqui</IonButton>
        </IonRow>
        <IonTitle className="ion-no-padding">Seção importante</IonTitle>
        <IonRow className="ion-margin-top">
          <IonText>Esta é uma seção com conteúdo relevante</IonText>
        </IonRow>
        <IonImg
          className="sm"
          style={{ maxWidth: 300 }}
          src="https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.jpg"
        />
        <IonRow>
          <IonButton id="trigger" onClick={getImage}>
            Gerar Imagem
          </IonButton>
        </IonRow>
        <IonImg style={{"width": 400}} src={image} />
        <IonLoading trigger="trigger" duration={2000} />
      </IonGrid>
  )
}

export default App
