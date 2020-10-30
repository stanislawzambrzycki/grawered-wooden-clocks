<template>
  <div id="app">
    <LogoComponent v-if="showLogo"></LogoComponent>

    <nav class="navigation">
      <MenuComponent v-if="showMenu"></MenuComponent>
      <NavbarComponent v-if="showNavbar"></NavbarComponent>
    </nav>

    <div class="content">
      <HomeComponent v-if="showHome"></HomeComponent>
      <ProductsComponent v-if="showProducts"></ProductsComponent>
      <AboutComponent v-if="showAbout"></AboutComponent>
      <ContactComponent v-if="showContact"></ContactComponent>
    </div>

    <FooterComponent v-if="showFooter"></FooterComponent>
  </div>
</template>

<script src="./App.js" />
<style src="../../public/css/main.css"></style>
<style src="@fortawesome/fontawesome-free/css/all.css"></style>
