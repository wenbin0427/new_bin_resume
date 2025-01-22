<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 mx-auto">
        <div class="accordion mt-5 card" id="accordionExample">
          <!-- 動態渲染 Accordion -->
          <div
            class="accordion-item"
            v-for="(item, index) in logs"
            :key="index"
          >
            <div class="card-body">
              <div class="row">
                <div class="col-4">{{ item.date }}</div>
                <div class="col-6">{{ item.title }}</div>
                <div
                  class="col text-end accordion-header collapsed"
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="'#collapse' + item.id"
                  :aria-controls="'collapse' + item.id"
                  :aria-expanded="false"
                  :id="'heading' + item.id"
                >
                  <box-icon type="solid" name="chevron-down"></box-icon>
                </div>
              </div>
              <div
                :id="'collapse' + item.id"
                class="accordion-collapse collapse"
                :aria-labelledby="'heading' + item.id"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li v-for="(content, idx) in parseContent(item.content)" :key="idx">
                      {{ content }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateLog",
  data() {
    return {
      logs: [], // 儲存 JSON 資料
    };
  },
  mounted() {
    fetch("./json/uplog.json") // 從 public 資料夾讀取 JSON
      .then((response) => response.json())
      .then((data) => {
        this.logs = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date) // 按日期排序
        );
      })
      .catch((error) => console.error("讀取 JSON 出錯:", error));
  },
  methods: {
    // 使用 , 分割 content 內容
    parseContent(content) {
      return content.split(",").map((item) => item.trim().substring(2));
    },
  },
};
</script>
