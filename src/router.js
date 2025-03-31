import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/Index.vue") },
  { path: "/activity", component: () => import("./views/Activity.vue") },
  { path: "/actor", component: () => import("./views/Actor.vue") },
  {
    path: "/actor/:id",
    component: () => import("./views/Actor.vue"),
    props: true,
  },
  { path: "/actors", component: () => import("./views/Actors.vue") },
  { path: "/artefact", component: () => import("./views/Artefact.vue") },
  { path: "/home", component: () => import("./views/Home.vue") },
  { path: "/login", component: () => import("./views/Login.vue") },
  { path: "/integration", component: () => import("./views/Integration.vue") },
  {
    path: "/integrations",
    component: () => import("./views/Integrations.vue"),
  },
  {
    path: "/integrationshop",
    component: () => import("./views/IntegrationShop.vue"),
  },
  { path: "/method", component: () => import("./views/Method.vue") },
  {
    path: "/method/:id",
    component: () => import("./views/Method.vue"),
    props: true,
  },
  { path: "/methods", component: () => import("./views/Methods.vue") },
  { path: "/methodshop", component: () => import("./views/MethodShop.vue") },
  { path: "/page", component: () => import("./views/Page.vue") },
  { path: "/portfolio", component: () => import("./views/Portfolio.vue") },
  {
    path: "/portfolio/:id",
    component: () => import("./views/Portfolio.vue"),
    props: true,
  },
  { path: "/product", component: () => import("./views/Product.vue") },
  {
    path: "/product/:id",
    component: () => import("./views/Product.vue"),
    props: true,
  },
  { path: "/register", component: () => import("./views/Register.vue") },
  { path: "/task", component: () => import("./views/Task.vue") },
  { path: "/trash", component: () => import("./views/Trash.vue") },

  { path: "/subpis/home", component: () => import("./aviews/Home.vue") },
    {
    path: "/subpis/cooperation",
    component: () => import("./aviews/Cooperation.vue"),
  },
  {
    path: "/subpis/admin",
    component: () => import("./aviews/Admin.vue"),
    children: [
      {
        path: "/subpis/admin/users",
        component: () => import("./aviews/Admin/Users.vue"),
        children:[
          {
          path: "/subpis/admin/users/users",
          component: () => import("./aviews/Admin/Users/Users.vue"),
        },
        {
          path: "/subpis/admin/users/groups",
          component: () => import("./aviews/Admin/Users/Groups.vue"),
        },
  
        ]
      },
      {
        path: "/subpis/admin/configs",
        component: () => import("./aviews/Admin/Configs.vue"),
      },

      {
        path: "/subpis/admin/publish",
        component: () => import("./aviews/Admin/Publish.vue"),
      },
      {
        path: "/subpis/admin/method",
        component: () => import("./aviews/Admin/Method.vue"),
        children:[
          {path: '/subpis/admin/method/model-types',
        component: () => import("./aviews/Admin/Method/ModelTypes.vue"),}
        ]
      },
      {
        path: "/subpis/admin/databases",
        component: () => import("./aviews/Admin/Databases.vue"),
      },
      {
        path: "/subpis/admin/processes",
        component: () => import("./aviews/Admin/Processes.vue"),
      },
      {
        path: "/subpis/admin/mining",
        component: () => import("./aviews/Admin/Mining.vue"),
      },
      {
        path: "/subpis/admin/imitation",
        component: () => import("./aviews/Admin/Imitation.vue"),
      },
      {
        path: "/subpis/admin/interface",
        component: () => import("./aviews/Admin/Interface.vue"),
      },
      {
        path: "/subpis/admin/license",
        component: () => import("./aviews/Admin/License.vue"),
      },
    ],
  },
  {
    path: "/subpis/favorites",
    component: () => import("./aviews/Favorites.vue"),
  },
  { path: "/subpis/tasks", component: () => import("./aviews/Tasks.vue") },
  { path: "/subpis/help", component: () => import("./aviews/Help.vue") },
  { path: "/subpis/chat", component: () => import("./aviews/Chat.vue") },
  
  { path: "/subpis/models/code/:code", component: () => import("./aviews/Models.vue"),props:true},
  { path: "/subpis/models/:id", component: () => import("./aviews/Models.vue"),props:true},
  { path: "/subpis/models",component: () => import("./aviews/Models.vue"),},

  { path: "/subpis/docs/code/:code", component: () => import("./aviews/Docs.vue"),props:true},
  { path: "/subpis/docs/:id", component: () => import("./aviews/Docs.vue"),props:true},
  { path: "/subpis/docs", component: () => import("./aviews/Docs.vue"),},
  
  { path: "/subpis/publish/code/:code", component: () => import("./aviews/Publish.vue"),props:true },
  { path: "/subpis/publish/:id", component: () => import("./aviews/Publish.vue"),props:true },
  { path: "/subpis/publish", component: () => import("./aviews/Publish.vue") },


  { path: "/subpis/editor/code/:code", component: () => import("./aviews/Editor.vue"),props:true },
  { path: "/subpis/editor/id/:id", component: () => import("./aviews/Editor.vue"),props:true },
  { path: "/subpis/editor/new/:modelType", component: () => import("./aviews/Editor.vue"),props:true },
  { path: "/subpis/editor", component: () => import("./aviews/Editor.vue") },
  { path: "/subpis/editor/whiteboard", component: () => import("./aviews/Editor.vue") },
  
  { path: "/subpis/wiki/code/:code", component: () => import("./aviews/Wiki.vue"), props:true },
  { path: "/subpis/wiki/:id", component: () => import("./aviews/Wiki.vue"), props:true },
  { path: "/subpis/wiki", component: () => import("./aviews/Wiki.vue") },
  {
    path: "/subpis/script",
    component: () => import("./aviews/Script.vue"),
  },

  {
    path: "/subpis/exp/test1",
    component: () => import("./aviews/Exp/Test1.vue"),
  },
  {
    path: "/subpis/exp/test2",
    component: () => import("./aviews/Exp/Test2.vue"),
  },
  {
    path: "/subpis/exp/test3",
    component: () => import("./aviews/Exp/Test3.vue"),
  },
  {
    path: "/subpis/exp/test4",
    component: () => import("./aviews/Exp/Test4.vue"),
  },
  {
    path: "/subpis/exp/test5",
    component: () => import("./aviews/Exp/Test5.vue"),
  },

  {path: "/prodops/home",    component: () => import("./pviews/Home.vue"),},
  {path: "/prodops/activity/:activityId", component: () => import("./pviews/Activity.vue"),props:true},
  {path: "/prodops/activities/actor/:actorId", component: () => import("./pviews/Activities.vue"),props:true},
  {path: "/prodops/artefacts/actor/:actorId", component: () => import("./pviews/Artefacts.vue"),props:true},
  {path: "/prodops/actor/:actorId", component: () => import("./pviews/Actor.vue"),props:true},
  {path: "/prodops/integrations/actor/:actorId", component: () => import("./pviews/Integrations.vue"),props:true},
  {path: "/prodops/methods/actor/:actorId", component: () => import("./pviews/Methods.vue"),props:true},
  {path: "/prodops/pages/actor/:actorId", component: () => import("./pviews/Pages.vue"),props:true},
  {path: "/prodops/portfolio/:portfolioId", component: () => import("./pviews/Portfolio.vue"),props:true},
  {path: "/prodops/portfolios/actor/:actorId", component: () => import("./pviews/Portfolios.vue"),props:true},
  {path: "/prodops/product/:productId", component: () => import("./pviews/Product.vue"),props:true},
  {path: "/prodops/products/actor/:actorId", component: () => import("./pviews/Products.vue"),props:true},
  {path: "/prodops/task/:taskId", component: () => import("./pviews/Task.vue"),props:true},
  {path: "/prodops/tasks/actor/:actorId", component: () => import("./pviews/Tasks.vue"),props:true},


];

export default createRouter({
  history: createWebHistory(),
  routes,
});
