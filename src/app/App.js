import HomeComponent from "../components/home/home.vue";
import LogoComponent from "../components/logo/logo.vue";
import NavbarComponent from "../components/navbar/navbar.vue";
import ProductsComponent from "../components/products/products.vue";
import AboutComponent from "../components/about/about.vue";
import ContactComponent from "../components/contact/contact.vue";
import FooterComponent from "../components/footer/footer.vue";
import MenuComponent from "../components/menu/menu.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
    LogoComponent,
    NavbarComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
  },
  data() {
    return {
      showHome: true,
      showLogo: true,
      showNavbar: true,
      showProducts: false,
      showAbout: false,
      showContact: false,
      showMenu: true,
      showFooter: true,
    };
  },
  methods: {
    navigateTo(where) {
      switch (where) {
        case "home":
          this.showHome = true;
          this.showLogo = true;
          this.showNavbar = true;
          this.showProducts = false;
          this.showAbout = false;
          this.showContact = false;
          this.showMenu = false;
          this.showFooter = true;
          break;
        case "products":
          this.showHome = false;
          this.showLogo = true;
          this.showNavbar = true;
          this.showProducts = true;
          this.showAbout = false;
          this.showContact = false;
          this.showMenu = false;
          this.showFooter = true;
          break;
        case "about":
          this.showHome = false;
          this.showLogo = true;
          this.showNavbar = true;
          this.showProducts = false;
          this.showAbout = true;
          this.showContact = false;
          this.showMenu = false;
          this.showFooter = true;
          break;
        case "contact":
          this.showHome = false;
          this.showLogo = true;
          this.showNavbar = true;
          this.showProducts = false;
          this.showAbout = false;
          this.showContact = true;
          this.showMenu = false;
          this.showFooter = true;
          break;
      }
      this.$refs.menu.highlight(
        this.showHome,
        this.showProducts,
        this.showAbout,
        this.showContact
      );
    },
  },
};
