<template>
    <div class="col-12">
        <PageTitle title="關於我"/>
        <div class="card border-warning-subtle mt-5" style="background-color: #212121;" :data-aos="section.aos" data-aos-duration="1500"  v-for="section in aboutsections" :key="section.id">
            <!-- 標題 -->
            <div class="card-title border-bottom border-warning-subtle">
                <h3 class="text-center text-white mt-3 mb-3 fw-bold">
                    <i :class="section.title_icon"></i>{{ section.title_text }}
                </h3>
            </div>
            <!-- 內容 -->
            <div class="card-body">
                <div class="text-white mb-3" v-for="content in section.contents" :key="content.id">
                    <i :class="content.content_icon" style="color: #ffc107;"></i>
                    <span style="font-size: 18px;">{{ content.content_text }}</span>
                </div>
                 <!-- 專業能力內容 -->
                <div v-if="section.skills" class="row">
                    <div v-for="skill in section.skills" :key="skill.id" class="col-6 col-sm-4 mt-3 d-flex justify-content-center">
                        <div class="circle_hollow">
                            <img class="iconsz" :src="skill.icon" >
                            <p class="text-white ms-1 mt-1 fw-semibold">{{ skill.percentage }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from './PageTitle';
export default {
    name: "About",
    components:{
        PageTitle
    },
    data() {
        return {
            aboutsections: [
                {
                    id: 1,
                    title_icon: "bi bi-file-person-fill",
                    title_text: "基本資料",
                    aos:"fade-right",
                    contents: [
                        { id: 1, content_icon: "bi bi-person-fill me-1 fs-4", content_text: "姓名：董文賓" },
                        { id: 2, content_icon: "bi bi-calendar2-date-fill me-1 fs-4", content_text: "生日：2002/04/27" },
                        { id: 3, content_icon: "bi bi-house-fill me-1 fs-4", content_text: "現居：高雄市" },
                        { id: 4, content_icon: "bi bi-mortarboard-fill me-1 fs-4", content_text: "畢業：台南應用科技大學 資訊管理系" },
                    ],
                },
                {
                    id: 2,
                    title_icon: "bi bi-briefcase-fill",
                    title_text: "經歷",
                    aos:"fade-left",
                    contents: [
                        { id: 1, content_icon: "bi bi-1-circle-fill me-1 fs-5", content_text: "2021/06~2022/06 台南應用科技大學-資訊管理系（會計資訊系統）教學助理" },
                        { id: 2, content_icon: "bi bi-2-circle-fill me-1 fs-5", content_text: "2021/01~2022/01 臺南市紀安國小-Micro:Bit程式 講師" },
                        { id: 3, content_icon: "bi bi-3-circle-fill me-1 fs-5", content_text: "2023/01~2024/06 台南應用科技大學-應用英語系 工讀生" },
                        { id: 4, content_icon: "bi bi-4-circle-fill me-1 fs-5", content_text: "2024/11~2024/12 智慧機械之AI人工智慧技術應用班（青年專班）結訓" }

                    ],
                },
                {
                    id: 3,
                    title_icon: "bi bi-person-vcard-fill",
                    title_text: "專業證照",
                    aos:"fade-right",
                    contents: [
                        { id: 1, content_icon: "bi bi-1-circle-fill me-1 fs-5", content_text: "乙級電腦軟體應用技術士" },
                        { id: 2, content_icon: "bi bi-2-circle-fill me-1 fs-5", content_text: "丙級電腦軟體應用技術士" },
                        { id: 3, content_icon: "bi bi-3-circle-fill me-1 fs-5", content_text: "TQC 物聯網智慧應用及技術-專業級" },
                        { id: 4, content_icon: "bi bi-4-circle-fill me-1 fs-5", content_text: "MTA：Database Administration Fundamentals" },
                        { id: 5, content_icon: "bi bi-5-circle-fill me-1 fs-5", content_text: "GLAD：Certification Programs using Python Programming - Essentials level" },
                        { id: 6, content_icon: "bi bi-6-circle-fill me-1 fs-5", content_text: "GLAD：Artificial Intelligence Technology and Applications - Specialist level" },
                    ],
                },
                {
                    id: 4,
                    title_icon: "bi bi-tools",
                    title_text: "專業能力",
                    aos:"fade-left",
                    skills: [
                        { id: 1, icon: require('@/assets/img/html_icon.png'), percentage: "90%" },          //html
                        { id: 2, icon: require('@/assets/img/css_icon.png'), percentage: "85%" },           //css
                        { id: 3, icon: require('@/assets/img/js_icon.png'), percentage: "80%" },            //js
                        { id: 4, icon: require('@/assets/img/data_icon.png'), percentage: "80%" },          //mysql
                        { id: 5, icon: require('@/assets/img/jquery_icon-240.png'), percentage: "85%" },    //jq
                        { id: 6, icon: require('@/assets/img/php_icon.png'), percentage: "90%" },           //php
                        { id: 7, icon: require('@/assets/img/vuejs_icon.png'), percentage: "70%" },         //vue

                    ],
                },
            ],
        };
    },
};
</script>
<style>
.circle_hollow{
    width: 100px; 
    height: 100px;
    border-radius: 50%;
    background: none; 
    border: 4px solid #ffc107;
    padding-top: 15px;
    padding-left: 25px;
}
.iconsz{
    width: 40px;
    height: 40px;
}

</style>