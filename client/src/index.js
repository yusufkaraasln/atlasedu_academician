import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles/ScreenError.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const screenX = window.screen.width;
const screenY = window.screen.height;
root.render(
  <Provider store={store}>
    {screenX < 320 || screenY < 668 || screenX > 1421 || screenY > 865 ? (
      <div className="mobileWarning">
        <h1 className="headerWarning">Üzgünüz </h1>
        <p className="contentWarning">
          Şuanda geliştirme aşamasında olduğundan Iphone 5 veya denk cihazlardan
          küçük çözünürlükteki kullanım ve laptop & masaüstü gibi büyük
          cihazlardaki kullanım henüz desteklenmemektedir. Anlayışınız için teşekkür
          ederiz ve desteklenen boyutlardaki mobil cihazlardan uygulamaya giriş yapmanızı tavsiye ederiz.
        </p>
      </div>
    ) : (
      <App />
    )}
  </Provider>
);
