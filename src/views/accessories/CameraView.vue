<template>
  <div class="camera-content-page">
    <h1>Camera</h1>

    <div style="display: flex; justify-content: center; flex-direction: column">
      <div
        style="
          width: 50px;
          margin-left: 20px;
          height: 20px;
          border: 1px solid black;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        "
      ></div>
      <div
        style="
          width: 120px;
          margin-left: 20px;
          height: 20px;
          border: 1px solid black;
          border-top-right-radius: 8px;
        "
      ></div>
      <div
        style="
          width: 600px;
          height: 200px;
          border: 1px solid black;
          border-radius: 10px;
          position: relative;
          display: flex;
          justify-content: flex-end;
          z-index: 1;
        "
      >
        <div
          style="
            width: 300px;
            height: 300px;
            margin-right: 50px;
            border: 1px solid black;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            display: flex;
            justify-content: center;
            z-index: 2;
            align-items: center;
            background-color: white;
          "
        >
          <div
            style="
              width: 290px;
              height: 290px;
              border-radius: 50%;
              border: 1px solid black;
              display: flex;
              justify-content: center;
              z-index: 2;
              align-items: center;
            "
          >
            <div
              style="
                width: 200px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid black;
              "
            >
              <div
                style="
                  width: 190px;
                  height: 190px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: 1px solid black;
                  border-radius: 50%;
                "
              >
                <div
                  style="
                    width: 180px;
                    height: 180px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    border-radius: 50%;
                  "
                >
                  <div
                    style="
                      width: 130px;
                      height: 130px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      border: 1px solid black;
                      border-radius: 50%;
                    "
                  >
                    <div
                      style="
                        width: 120px;
                        height: 120px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid black;
                        border-radius: 50%;
                      "
                    >
                      <div
                        style="
                          width: 110px;
                          height: 110px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          border: 1px solid black;
                          border-radius: 50%;
                        "
                      >
                        <div
                          style="
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid black;
                            border-radius: 50%;
                          "
                        >
                          <div
                            style="
                              width: 40px;
                              height: 40px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              border: 1px solid black;
                              border-radius: 50%;
                              background: linear-gradient(135deg, #000000, #1a0033, #6a0dad);
                            "
                          >
                            <div
                              style="
                                width: 10px;
                                height: 10px;
                                background-color: white;
                                border-radius: 50%;
                                background: linear-gradient(135deg, #ffffff, #6a0dad, #ffffff);
                              "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.camera-content-page {
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}
</style>
