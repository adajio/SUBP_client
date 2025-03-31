import { createApp } from "vue";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
// import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@mdi/font/css/materialdesignicons.min.css";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Breadcrumb from "primevue/breadcrumb"; // optional
import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import FocusTrap from 'primevue/focustrap';
import InputText from "primevue/inputtext";
import InputSwitch from "primevue/inputswitch";
// import MegaMenu from 'primevue/megamenu';
import Menu from "primevue/menu";
// import Menubar from 'primevue/menubar';
import OverlayPanel from "primevue/overlaypanel";
import Panel from "primevue/panel";
import Paginator from "primevue/paginator";
import Rating from "primevue/rating";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import Ripple from "primevue/ripple";
import Row from "primevue/row";
import ScrollPanel from "primevue/scrollpanel";
import Sidebar from "primevue/sidebar";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import TabMenu from "primevue/tabmenu";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToggleButton from "primevue/togglebutton";
import Toolbar from "primevue/toolbar";
import Tooltip from "primevue/tooltip";
import Tree from "primevue/tree";

import router from "./router";
import App from "./views/App.vue";
import ToastService from "primevue/toastservice";

import "./style.css";
// import "./chat.css";
import "./emoji.css";

import Voix from './Voix.vue';
// import GQL from './GQL.vue';
import SQL from './SQL.vue';

import LayoutMain from "./views/Layout/Main.vue";
import LayoutLogin from "./views/Layout/Login.vue";
import LayoutSite from "./views/Layout/Site.vue";
import LayoutSubpis from "./aviews/Layout/Subpis.vue";
import AppLayout from "./pviews/App/Layout.vue";

import { createPinia } from 'pinia';

//import ApolloClient from 'apollo-boost';

// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://127.0.0.1:4000/graphql'
// });

// import Vue from 'vue';
// import VueApollo from 'vue-apollo';


const app = createApp(App);

// app.use(VueApollo);

// app.config.globalProperties.$EDITOR_URL = "http://localhost:8009";
// app.config.globalProperties.$BACKEND_URL = "http://localhost:8010";

const pinia = createPinia();
app.use(pinia);

// app.use(PrimeVue);
app.use(PrimeVue, { inputStyle: "filled", ripple: true });
app.use(router);
app.use(ToastService);

app.directive('focustrap', FocusTrap);
app.directive("ripple", Ripple);
app.directive("tooltip", Tooltip);

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Breadcrumb", Breadcrumb);
app.component("Button", Button);
app.component("Card", Card);
app.component("Checkbox", Checkbox);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("DataTable", DataTable);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("FileUpload", FileUpload);
// app.component('MegaMenu',MegaMenu);
app.component("Menu", Menu);
// app.component('Menubar',Menubar);
app.component("OverlayPanel", OverlayPanel);
app.component("Paginator", Paginator);
app.component("Panel", Panel);

app.component("ProgressBar", ProgressBar);
app.component("Rating", Rating);
app.component("RadioButton", RadioButton);
app.component("Row", Row);
app.component("ScrollPanel", ScrollPanel);
app.component("Sidebar", Sidebar);
app.component("SplitButton", SplitButton);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("TabMenu", TabMenu);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("Textarea", Textarea);
app.component("Toast", Toast);
app.component("ToggleButton", ToggleButton);
app.component("Toolbar", Toolbar);
app.component("Tree", Tree);

app.component("LayoutMain", LayoutMain);
app.component("LayoutLogin", LayoutLogin);
app.component("LayoutSite", LayoutSite);
app.component("LayoutSubpis", LayoutSubpis);
app.component("AppLayout", AppLayout);

app.component("Voix", Voix);
// app.component("GQL", GQL);
app.component("SQL", SQL);

import CardActivities from './pviews/Card/Activities.vue';
import CardArtefacts from './pviews/Card/Artefacts.vue';
import CardMembers from './pviews/Card/Members.vue';

app.component("CardActivities", CardActivities);
app.component("CardArtefacts", CardArtefacts);
app.component("CardMembers", CardMembers);

app.mount("#app");
