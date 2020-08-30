  
  https://www.udemy.com/course/react-native-and-redux-course-using-hooks/learn/lecture/18192248#overview

PERMISO PARA EMULADOR ANDROID

 'sudo chown enzo83 /dev/kvm '

.................................#Resolver variables de entorno!!!

4 de agosto 2020.

##### REACT NATIVE ######

Utilizando expo: 

1- ' npm install -g expo-cli '

2- ' expo init nameApp '

3- ' npm i react-native-paper '  ( Librería de componentes con Material Design )
https://callstack.github.io/react-native-paper/fab.html


4- ' npm install @react-navigation/native ' (Navegación entre páginas)
https://reactnavigation.org/

4-(a)- ' expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view ' ( librería para navigation en expo )

4-(b)- ' npm install @react-navigation/stack '( también para navegar )
https://reactnavigation.org/docs/stack-navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

4-(c)- ' npm install @react-navigation/bottom-tabs ' Tabs de navegación. 


5- ' expo install expo-image-picker' (Para acceder a la galería de imágenes)
https://docs.expo.io/versions/latest/sdk/imagepicker/




6- ' expo install expo-linear-gradient '  (Linear gradients)
https://docs.expo.io/versions/latest/sdk/linear-gradient/

---------------------------------------------------------
7- ' npm install express body-parser mongoose ' (Backend) 

8- ' npm install ngrok -g ' (Permite hacer peticiones desde el teléfono a mi local host, me da una url que dura 7 horas. Esto es para desarrollo, porque luego en producción la url me la da Heroku )

en emulador puedo usar: 'http://10.0.2.2:3000/send-data' para conectarlo con el local host, pero en teléfono físico debería usar ngrok para desarrollo en local host, sino no funciona. 

USO: en consola : ' ngrok http nroDePuerto ' 

https://www.udemy.com/course/react-native-and-redux-course-using-hooks/learn/lecture/18336212#overview

***Da error en la instalación global***
Lo solucioné con este comando : 
' sudo npm install -g ngrok --unsafe-perm=true --allow-root '
https://www.npmjs.com/package/ngrok

-------------------------------------------------------------------------
Instalación de VYSOR ( Es una aplicación web para controlar el teléfono desde la computadora )

https://www.vysor.io/  (No me gustó cómo se ve en Linux y opté por el emulador de Android Studio ). También se puede descargar la app de expo en el teléfono para escanera el código QR y correr la app en el dispositivo físico.

------------------------------------------------------
*Iconos: los tiene el mismo expo* 
 import { MaterialIcons } from '@expo/vector-icons';
También hay en paper

------------------------------------------------------
#***** 'REDUX' 
  ' npm install redux react-redux ' 

-------------------------------------------------------------------

*React Native Web View (Clase N°45)

 ' npm install --save react-native-webview' Lo usé para poder reproducir los videos que vienen de la api de youtube.

 <WebView 
     javaScriptEnabled={true}
     domStorageEnabled={true}
     source={{ uri:`https://www.youtube.com/embed/${videoId}`}}
  />

https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md

--------------------------------------------------------------------

Touchable opacity: (Para poder usar el onPress en un view con una imágen)
  <TouchableOpacity onPress={}>
  </TouchableOpacity>
         
-------------------------------------------------------------------

*  'useNavigation '
const navigation = useNavigation();


*'DARK THEME' React Navigation trae un hook para eso. (Clase N°46)

-------------------------------------------------------------------

' Build ' (Clase N° 49)

 1-  Configurar app.json  

  "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }

 2- La aplicación debe estar corriendo en una terminal.

 3- ' expo build:android ' En otra terminal.

https://docs.expo.io/distribution/building-standalone-apps/


*Expo usa sus servidores para compilar la aplicación.
Cuando finalizó me dió este link, y desde ahí descargo el apk.

https://expo.io/artifacts/26dbfaaf-30a3-4863-ba91-5a7cfc7b9c72
