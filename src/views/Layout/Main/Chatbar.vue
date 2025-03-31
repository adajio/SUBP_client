<template>
    <div style="background-color: var(--primary-50);display:flex;flex-direction: column;height:calc(100vh - 45px);">
        <!-- ВЕРХНЯЯ ЧАСТЬ -->
        <div>
            <div style="display:flex;justify-content: space-between;padding:10px">
                <div @click="emit('hideChatbar')" v-tooltip="'Закрыть обсуждение'">
                    <i class="mdi mdi-chevron-double-right sidebar-icon"></i>
                </div>
                <div style="display:flex;align-items: center;">
                    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" style="width:20px;height:20px;"></Avatar>
                    <div style="padding-left:10px">Евгений Серебрянко</div>
                </div>

            </div>
        </div>
        <div style="flex-grow: 1;">
            <!-- НИЖНЯЯ ЧАСТЬ -->
            <main class="msger-chat">

                <div class="msg left-msg">
                    <div class="msg-img" style="background-image: url(/images/blocks/avatars/circle/avatar-m-1.png)"></div>

                    <div class="msg-bubble">
                        <div class="msg-info">
                            <div class="msg-info-name">Александров А.С.</div>
                            <div class="msg-info-time">12:45</div>
                        </div>

                        <div class="msg-text">
                            Я сегодня завершил опрос функциональных заказчиков и составил прототип диаграммы в формате BPMN.
                            Документы с формами и таблицы приложены к модели. 😄
                        </div>
                    </div>
                </div>

                <div class="msg right-msg">
                    <div class="msg-img" style="background-image: url(/images/blocks/avatars/circle/avatar-m-2.png)"></div>

                    <div class="msg-bubble">
                        <div class="msg-info">
                            <div class="msg-info-name">Васильев О.Г.</div>
                            <div class="msg-info-time">12:46</div>
                        </div>

                        <div class="msg-text">
                            Отлично! Я проверил и внес кое-какие комментарии к отдельным элементам.
                            Когда сможете согласовать бизнес-процесс?
                            Меня волнует вот эта задача:<br><br>
                            <span
                                style="cursor:pointer;border:1.5px solid black;border-radius:5px;padding:10px;background:#FFFFFF;color:black;font-size:11px">Выполнить
                                действие</span>
                            <br><br>Замерьте, пожалуйста, частоту выполнения этой задачи и какими KPI она измеряется.
                        </div>
                    </div>
                </div>


                <div class="msg left-msg">
                    <div class="msg-img" style="background-image: url(/images/blocks/avatars/circle/avatar-m-1.png)"></div>

                    <div class="msg-bubble">
                        <div class="msg-info">
                            <div class="msg-info-name">Александров А.С.</div>
                            <div class="msg-info-time">12:48</div>
                        </div>

                        <div class="msg-text">
                            Все будет сделано, шеф!
                        </div>
                    </div>
                </div>

            </main>
        </div>
        <div style="display:flex; flex-direction: row;align-items: center;">
            <i v-tooltip="'Прикрепить файл'" class="mdi mdi-paperclip sidebar-icon" style="margin-left:10px;margin-right:10px;"></i>
            <div class="p-input-icon-right" style="flex-grow: 1;">
                <i v-tooltip="'Добавить смайлик'" class="mdi mdi-emoticon-outline sedebar-icon" />
                <Textarea style="width:100%;height:45px;"></Textarea>
            </div>
            <i v-tooltip="'Отправить сообщение'" class="mdi mdi-send sidebar-icon" style="margin-left:10px;margin-right:10px;"></i>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['hideChatbar']);


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
}
</style>