<template>
    <div style="background-color: var(--primary-50);display:flex;flex-direction: column;height:calc(100vh - 45px);">
        <!-- ВЕРХНЯЯ ЧАСТЬ -->
        <div>
            <div style="display:flex;justify-content: space-between;padding:10px">
                <div @click="emit('hideActivebar')">
                    <i v-tooltip="'Закрыть ленту активности'" class="mdi mdi-chevron-double-right sidebar-icon"></i>
                </div>
                <div style="display:flex;align-items: center;">
                    <div style="padding-left:10px;font-size:16px">Лента активности</div>
                </div>

            </div>
        </div>
        <div style="flex-grow: 1;">
            <!-- НИЖНЯЯ ЧАСТЬ -->


            <div class="surface-card shadow-2 border-round p-4">
                <!-- <div class="flex align-items-center justify-content-between mb-3">
                    <div class="text-900 font-medium text-xl">Team Activity</div>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                            @click="$refs.menu2.toggle($event)"></Button>
                        <Menu ref="menu2" :popup="true" :model="items"></Menu>
                    </div>
                </div> -->
                <ul class="list-none p-0 m-0">
                    <li
                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div class="flex align-items-start mr-0 lg:mr-5">
                            <img src="/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 w-3rem h-3rem" />
                            <div>
                                <span class="text-900 font-medium block mb-2">Jane Cooper</span>
                                <div class="text-700 mb-2">responded to an issue.</div>
                                <a class="text-primary cursor-pointer">
                                    <i class="pi pi-github text-sm mr-2"></i>
                                    <span>Issue #1185</span>
                                </a>
                            </div>
                        </div>
                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                    </li>
                    <li
                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div class="flex align-items-start mr-0 lg:mr-5">
                            <img src="/images/blocks/avatars/circle/avatar-m-1.png" class="mr-3 w-3rem h-3rem" />
                            <div>
                                <span class="text-900 font-medium block mb-2">Robert Fox</span>
                                <div class="text-700">changed team size from <span class="text-900 font-medium">5</span> to
                                    <span class="text-900 font-medium">6</span>.</div>
                            </div>
                        </div>
                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                    </li>
                    <li
                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div class="flex align-items-start mr-0 lg:mr-5">
                            <img src="/images/blocks/avatars/circle/avatar-f-2.png" class="mr-3 w-3rem h-3rem" />
                            <div>
                                <span class="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                <a class="text-primary cursor-pointer">
                                    <i class="pi pi-file-pdf text-sm mr-2"></i>
                                    <span>q4_presentation.pdf</span>
                                </a>
                            </div>
                        </div>
                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                    </li>
                    <li
                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div class="flex align-items-start mr-0 lg:mr-5">
                            <img src="/images/blocks/avatars/circle/avatar-f-3.png" class="mr-3 w-3rem h-3rem" />
                            <div>
                                <span class="text-900 font-medium block mb-2">Annette Black</span>
                                <div class="text-700">added <span class="text-900 font-medium">Nico Greenberg</span> to
                                    <span class="text-primary">Watchlist Tier-1</span>.</div>
                            </div>
                        </div>
                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                    </li>
                    <li class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div class="flex align-items-start mr-0 lg:mr-5">
                            <img src="/images/blocks/avatars/circle/avatar-m-2.png" class="mr-3 w-3rem h-3rem" />
                            <div>
                                <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                                <div class="text-700">has refunded a blue t-shirt for <span class="text-primary">$79</span>.
                                </div>
                            </div>
                        </div>
                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                    </li>
                </ul>
            </div>



        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['hideActivebar']);


const onMount = () => {
    initChat();

    function initChat() {
        const msgerForm = get(".msger-inputarea");
        const msgerInput = get(".msger-input");
        const msgerChat = get(".msger-chat");

        const BOT_MSGS = [
            "Примерно через час",
            "Ohh... I can't understand what you trying to say. Sorry!",
            "I like to play games... But I don't know how to play!",
            "Sorry if my answers are not relevant. :))",
            "I feel sleepy! :(",
        ];

        // Icons made by Freepik from www.flaticon.com
        // const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
        // const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";

        const BOT_IMG = "/images/blocks/avatars/circle/avatar-m-1.png";
        const PERSON_IMG = "/images/blocks/avatars/circle/avatar-m-2.png";

        const BOT_NAME = "Александров А.С.";
        const PERSON_NAME = "Васильев О.Г.";

        function botResponse() {
            event.preventDefault();

            const msgText = $$('response').getValue();
            if (!msgText) return;

            appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
            msgerInput.value = "";

            botResponse();
        };

        function appendMessage(name, img, side, text) {
            //   Simple solution for small apps
            const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

            msgerChat.insertAdjacentHTML("beforeend", msgHTML);
            msgerChat.scrollTop += 500;
        }

        function botResponse() {
            const r = random(0, BOT_MSGS.length - 1);
            const msgText = BOT_MSGS[r];
            const delay = msgText.split(" ").length * 100;

            setTimeout(() => {
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            }, delay);
        }

        // Utils
        function get(selector, root = document) {
            return root.querySelector(selector);
        }

        function formatDate(date) {
            const h = "0" + date.getHours();
            const m = "0" + date.getMinutes();

            return `${h.slice(-2)}:${m.slice(-2)}`;
        }

        function random(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
}

</script>
<style scoped>
.sidebar-item {
    display: flex;
    align-items: center;
    margin: 0px 4px 0px 4px;
    padding: 4px 6px 4px 6px;
    /* color: var(--primary-900); */
    border-radius: 3px;
}

.sidebar-item:hover {
    background-color: var(--primary-100);
    ;
}

.sidebar-icon {
    font-size: 20px;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px 4px 0px 4px;
    padding: 4px 6px 4px 6px;
}</style>