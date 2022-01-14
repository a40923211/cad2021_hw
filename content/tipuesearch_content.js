var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/a40923211/cad2021_hw \n 網站連結:\xa0 https://a40923211.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '\n', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '\n \n 使用excel為每個學號加上前墜連結與後墜連結 \n ="https://"&B2&".github.io/cad2021_hw/content/index.html" \n 之後使用hyperlink指令為每個連結加入超連結，最後輸出，貼到這裡 \n \n \n \n 40723126 \n 40723126 \n \n \n 40723135 \n 40723135 \n \n \n 40723217 \n 40723217 \n \n \n 40732331 \n 40732331 \n \n \n 40823114 \n 40823114 \n \n \n 40823115 \n 40823115 \n \n \n 40823117 \n 40823117 \n \n \n 40823119 \n 40823119 \n \n \n 40823122 \n 40823122 \n \n \n 40823127 \n 40823127 \n \n \n 40823146 \n 40823146 \n \n \n 40823148 \n 40823148 \n \n \n 40823215 \n 40823215 \n \n \n 40871106 \n 40871106 \n \n \n 40923201 \n 40923201 \n \n \n 40923203 \n 40923203 \n \n \n 40923204 \n 40923204 \n \n \n 40923205 \n 40923205 \n \n \n 40923206 \n 40923206 \n \n \n 40923207 \n 40923207 \n \n \n 40923208 \n 40923208 \n \n \n 40923209 \n 40923209 \n \n \n 40923210 \n 40923210 \n \n \n 40923211 \n 40923211 \n \n \n 40923212 \n 40923212 \n \n \n 40923213 \n 40923213 \n \n \n 40923214 \n 40923214 \n \n \n 40923216 \n 40923216 \n \n \n 40923217 \n 40923217 \n \n \n 40923218 \n 40923218 \n \n \n 40923219 \n 40923219 \n \n \n 40923220 \n 40923220 \n \n \n 40923221 \n 40923221 \n \n \n 40923223 \n 40923223 \n \n \n 40923224 \n 40923224 \n \n \n 40923225 \n 40923225 \n \n \n 40923226 \n 40923226 \n \n \n 40923227 \n 40923227 \n \n \n 40923228 \n 40923228 \n \n \n 40923229 \n 40923229 \n \n \n 40923230 \n 40923230 \n \n \n 40923231 \n 40923231 \n \n \n 40923232 \n 40923232 \n \n \n 40923233 \n 40923233 \n \n \n 40923234 \n 40923234 \n \n \n 40923235 \n 40923235 \n \n \n 40923236 \n 40923236 \n \n \n 40923237 \n 40923237 \n \n \n 40923238 \n 40923238 \n \n \n 40923239 \n 40923239 \n \n \n 40923240 \n 40923240 \n \n \n 40923241 \n 40923241 \n \n \n 40923242 \n 40923242 \n \n \n 40923243 \n 40923243 \n \n \n 40923244 \n 40923244 \n \n \n 40923245 \n 40923245 \n \n \n 40923246 \n 40923246 \n \n \n 40923247 \n 40923247 \n \n \n \n', 'tags': '', 'url': 'hwpages.html'}, {'title': '第二種', 'text': '# 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/8a27e6885ee1a5074bcf864d741679afeac796c4/2b_w2_stud_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a>") \n \n', 'tags': '', 'url': '第二種.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 solidwork和歷史說明', 'text': 'solidwork\xa0 緣起說明與介紹 \n SolidWorks公司成立於1993年12月，其總部設在 美國 麻州 康克爾郡 ，西元1995年發表其第一款產品SolidWorks 95，1997年被 達梭系統 併購，SolidWorks公司現在是達梭系統的子公司。 \n 功能：三維建模、裝配、給圖，板金，焊接等。它可以從其它2D和3D CAD程序中導入多種不同格式的文件 \n \xa0 \n', 'tags': '', 'url': 'CAD1 solidwork和歷史說明.html'}, {'title': 'solidwork 安裝配置', 'text': 'CAD1 套件下載安裝與配置 \n solidwork 2017 跟朋友拿的 \n \n CAD1 下載安裝與配置流程\xa0 \n https://www.youtube.com/watch?v=kLFI2xg-C58&ab_channel=tinghanchen \n \n', 'tags': '', 'url': 'solidwork 安裝配置.html'}, {'title': 'solidwork 操作流程', 'text': 'solidwork 零組件繪圖操作流程影片 (Youtube) \n https://www.youtube.com/watch?v=P-KXqaUrVCw&ab_channel=tinghanchen \n \n solidwork 零組件繪圖教學影片第二版 \n https://www.youtube.com/watch?v=ter-SwlezZM&ab_channel=tinghanchen \n \xa0 \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱.', 'tags': '', 'url': 'solidwork 操作流程.html'}, {'title': 'CAD2 solvespace和歷史說明', 'text': 'solvespace\xa0 緣起說明與介紹 \n SolveSpace是一個 免費（自由）和開源的 2D 和 3D \xa0 CAD （ 計算機輔助設計 ）程序。 它是一個基於約束的參數建模器，具有簡單的機械仿真功能。 \n 功能: 建模 3D 零件\xa0 ，建模 2D 零件， 準備 CAM 數據，\xa0 機構設計 ，平面和實體幾何。 \n', 'tags': '', 'url': 'CAD2 solvespace和歷史說明.html'}, {'title': 'solvespace 安裝配置', 'text': '從老師給的網站連結下載 \n https://mde.tw/cad2021/content/HW_template.html \n', 'tags': '', 'url': 'solvespace 安裝配置.html'}, {'title': 'solvespace 操作流程', 'text': '零組件繪圖操作流程影片 \n https://www.youtube.com/watch?v=7lslOX7xfyw&ab_channel=tinghanchen \n \n \n CAD2 零組件繪圖教學影片 (Wink) \n', 'tags': '', 'url': 'solvespace 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n https://www.youtube.com/watch?v=e94uWTbvLS8&ab_channel=tinghanchen \n \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n https://www.youtube.com/watch?v=2lRzWoH76K8&ab_channel=tinghanchen \n \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': '零件', 'text': '建立一個 Wink 檔案說明截至目前所完成的兩套 CAD 零組件繪圖進度 (30%). \n 目前零件進度: \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '零件.html'}, {'title': '第一軸運動', 'text': '建立一個 Wink 檔案, 將 1. 已經完成的 meArm 機械手臂第一軸, 加入 https://www.coppeliarobotics.com/helpFiles/en/simUI-widgets.htm slider, 可以在執行時, 利用滑鼠拖動旋轉 360 度 (30%). \n 第一軸模擬運動: \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '第一軸運動.html'}, {'title': '第二三軸運動', 'text': '請建立一個 Wink 檔案, 將 1. 已經完成的 meArm 機械手臂其中的 1 ~ 3 軸 (夾爪除外), 加入 UI 介面 slider, 可以在執行時, 利用滑鼠拖動在各軸的極限位置旋轉 (40%). \n 第二三軸模擬運動: \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '第二三軸運動.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n https://www.youtube.com/watch?v=td81uIRDZ9M&ab_channel=tinghanchen \n \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': '連桿機構solidwork', 'text': '檔案: w11 stl \n 繪圖: https://www.youtube.com/watch?v=kPGrZVAdhw8&ab_channel=tinghanchen \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '連桿機構solidwork.html'}, {'title': '連桿機構solvespace', 'text': '檔案: w11 stl \n 繪圖: https://www.youtube.com/watch?v=teUSWM7_Vag&ab_channel=tinghanchen \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '連桿機構solvespace.html'}, {'title': '模擬場景', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '模擬場景.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成.更新一下 \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': '期末考檔案stl \n https://www.youtube.com/watch?v=SRnt00ozu7I&ab_channel=PAPAYA%E9%9B%BB%E8%85%A6%E6%95%99%E5%AE%A4 \n \xa0 \xa0 \n 組合圖模擬 \n https://www.youtube.com/watch?v=U-5TOA-aZ-w \n \xa0 \n 轉入coppeliasim \n https://www.youtube.com/watch?v=Ux8h5HbmxUw \n \n 運動模擬 \n https://www.youtube.com/watch?v=nFMx0J2_Vos \n \n 期末延伸: \n https://www.youtube.com/watch?v=L6HSQl-mCz0&ab_channel=tinghanchen \n \n 期末2轉入coppeliasim \n https://www.youtube.com/watch?v=5N9vBBhXueM&ab_channel=tinghanchen \n \n 期末2模擬 \n https://www.youtube.com/watch?v=U_3oq0qVfUU&ab_channel=tinghanchen \n \n 這個題目最難的不是在繪圖，反而是在模擬coppeliasim難倒我了，後來不斷地問同學，解決了一些問題，算是還蠻有挑戰性的題目。 \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '期末考試', 'text': '第一階段:mearm 零件檔 \n https://drive.google.com/file/d/1zECB80999qcjPRvmVIUkaAgUuTVnIsg0/view?usp=sharing \n 第二階段:mearm組合圖 \n https://drive.google.com/file/d/1UAi136TRWmP8iYNOt0C7Rs4el8T656xy/view?usp=sharing \n 組合圖繪製 \n \n \n 第三階段:mearm模擬 \n https://www.youtube.com/watch?v=T1pYwoPrQhg&ab_channel=tinghanchen \n 轉入過程組合圖有很多問題，所以模擬檔案參考40923218，靠著他的協助順利完成第三階段，過程中學會了不要盲目追求完美，把基礎打好才是關鍵。 \n', 'tags': '', 'url': '期末考試.html'}, {'title': 'run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': '期末總結', 'text': '這學期學到許多，從基本的畫圖到coppeliasim的模擬，雖然在很多地方遭遇瓶頸，也讓我了解到不會就要問 \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': '期末總結.html'}]};