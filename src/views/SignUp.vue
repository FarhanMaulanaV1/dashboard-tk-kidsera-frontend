<template>
  <ion-page>
    <ion-header :translucent="true" class="container mt-3 py-4 mx-auto">
      <ion-button expand="block" size="large" shape="round" color="white">
        <ion-grid class="text-dark">
          <ion-row>
            <ion-col size="4" class="mt-1">
              <ion-title>Kidsera Dashboard</ion-title>
            </ion-col>
            <ion-col size-xl="3" class="mt-1">
              <ion-label><a class="nav-link" aria-current="page" href="#"><i
                    class="fa fa-chart-pie opacity-6 me-1"></i>Dashboard</a></ion-label>
            </ion-col>
            <ion-col size-xl="1" class="mt-1">
              <ion-label><a class="nav-link" href="../pages/sign-up.html"><i
                    class="fas fa-user-circle opacity-6 me-1"></i>Daftar</a></ion-label>
            </ion-col>
            <ion-col size-xl="1" class="mt-1">
              <ion-label><a class="nav-link" href="../pages/sign-up.html"><i
                    class="fas fa-user-circle opacity-6 me-1"></i>Daftar</a></ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-button>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kidsera DashBoard</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-card class='card-middle' color="white" mode="md">
          <ion-card-header>
            <ion-card-title>Daftar</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input placeholder="ID Pengajar"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input placeholder="Email"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input placeholder="Password" type="password"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item>
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>
                      <p>Saya setuju dengan <b>Syarat dan Ketentuan</b></p>
                    </ion-label>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <div class="button-regis">
                    <ion-button expand="block" color="primary">
                      Registrasi
                    </ion-button>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-label>
                    <p>Sudah Mempunyai Akun? <b>Masuk</b> </p>
                  </ion-label>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 5px 10px;
}

ion-checkbox {
  --size: 20px;
  --background-checked: #2348f0;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #2348f0;
}

.card-middle {
  width: 30%;
  height: 125%;
  margin: auto;
}

.button-regis {}

.container-nav {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
