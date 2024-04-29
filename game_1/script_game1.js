// List of text pairs
const textPairs = [
  ["الصبر مفتاح الفرج", "Al Sabr Miftah al-Faraj"],
  [
    "قطعوا الحبل، قال الخروف مش قلتلكن",
    "Qata'oo al-habl, qal al-kharoof mish qultilkun",
  ],
  ["اللي ما بيعرف الصقر بيشويه", "Ally ma bya'raf al-saqr byshwieh"],
  [
    "اذا كان حبيبك عسل ما تلحسوش كله",
    "Iza kan habibak 'asal, ma talhasou kello",
  ],
  ["كلام الليل يمحوه النهار", "Kalam al-layl yamhuhu al-nahar"],
  ["من حلقو شعرو ما بكي عليه", "Min hallo sha'ro ma baki 'alayh"],
  ["القرد بعين أمه غزال", "Al-qird bi 'ayn ummu ghazal"],
  ["يا طاير يا مطير", "Ya tayr ya mteer"],
  ["العين ما تعلا عن الحاجب", "Al-'ayn ma ta'la 'an al-hajib"],
  ["زيّ الفري بيقطع بعضو", "Zayy al-farri biqta' ba'do"],
  [
    "اللي ما بخاف من الله بخاف من الولاد",
    "Ally ma bikhaaf min Allah bikhaaf min al-awlad",
  ],
  ["مين استحى ما تهنى", "Meen istahya ma t'hanna"],
  ["اللي بيركب العالي ينخاف عليه", "Ally birkab al-'ali yinkhaf 'alayh"],
  [
    "طب الجرة ع تم الجرة حتى تطلع البنت لأمها",
    "Tabb al-jarra 'ala tam al-jarra hatta talti'l bint li-ummha",
  ],
  ["أخدوا القرد على قدر لحافه", "Akhadoo al-qird 'ala qaddar lihaafuh"],
  ["كلمة السر لا تقال", "Kalimat al-sirr la tuqal"],
  ["اللي بلا عدو بلا حسنات", "Ally bala 'adu bala hasanat"],
  ["كل شيء محبوب غالي", "Kull shay' mahboob ghali"],
  ["اللي ما يعرف الصقر يشويه", "Ally ma ya'rif al-saqr yashwieh"],
  ["جنة بلا ناس ما بتنداس", "Jannah bala nas ma btindas"],
  ["ريحة الحبيب تشفي", "Reehet al-habib teshfi"],
  ["الحيطان لها آذان", "Al-haytan laha adhan"],
  [
    "الباب اللي يجيك منه الريح سده واستريح",
    "Al-bab alli yijiik minhu al-reeh siddo wa istarih",
  ],
  [
    "قليل البخت يلاقي العظم بالكريمة",
    "Qaleel al-bakht ylaqi al-'idham bi-al-krema",
  ],
  ["سمع الحكيم وأعمل العكس", "Sami' al-hakeem wa'amal al-'aks"],
  ["من شب على شيء شاب عليه", "Min shab 'ala shay' shab 'alayh"],
  ["الصديق وقت الضيق", "Al-sadeeq waqt al-deeq"],
  ["الجار قبل الدار", "Al-jar qabl al-dar"],
  ["أكل العنب حبة حبة", "Akl al-'inab hobbah hobbah"],
  ["ما كل مرة تسلم الجرة", "Ma kull marra teslam al-jarra"],
  [
    "الفقير لو كان فرحان يجيبوا له الزعل",
    "Al-faqir law kan farhan yajeebo lah al-za'al",
  ],
  ["على قد لحافك مد رجليك", "‘Ala qad lihafak mid rijlayk"],
  ["الضحك بلا سبب قلة أدب", "Al-dhahk bila sabab qillat adab"],
  ["كلمة الحق تزعل", "Kalimat al-haq tuz'el"],
  ["النار من مستصغر الشرر", "Al-nar min mustasghar al-sharar"],
  ["لولا الأمل ما عاش الإنسان", "Lawla al-amal ma 'asha al-insan"],
  [
    "لو كان حبيبك عسل ما تلحسوش كله",
    "Law kan habibak 'asal ma talhasoush kullo",
  ],
  ["من طلع من داره قل مقداره", "Man tal'a min daroh qall maqdaro"],
  [
    "من قلة الخيل شدوا على الكلاب سروج",
    "Min qillat al-khayl shaddu 'ala al-kilab sarooj",
  ],
  ["بين أهلك بلاش غربة", "Bayn ahlak bela ghorba"],
  ["كل ديك على مزبلته صيّاح", "Kull deek 'ala mazbaltoh sayyah"],
  ["يا ريت كل الناس متل أهلنا", "Ya reit kull al-nas mitl ahlna"],
  ["اللي ما يعرف الصقر يشويه", "Ally ma ya'rif al-saqr yashwieh"],
  ["رب صدفة خير من ألف ميعاد", "Rabb sudfah khayr min alf mi'ad"],
  ["العتب على النظر", "Al-'utb 'ala al-nathar"],
  ["لما يركب الحمار أكتاف الجمل", "Lamma yirkab al-himar aktāf al-jamal"],
  ["حبل الكذب قصير", "Habl al-kidhb qaseer"],
  [
    "إذا أكرمت الكريم ملكته وإذا أكرمت اللئيم تمردا",
    "Idha akramt al-kareem malaktahu wa idha akramt al-la'eem tamarrada",
  ],
  ["الناس على دين ملوكهم", "An-nas 'ala deen malookihim"],
  ["القرد في عين أمه غزال", "Al-qird fi 'ayn ummuh ghazal"],
  ["أعزب دهر ولا أرمل شهر", "A'zab dehr wala armil shahr"],
  ["الحياة لا تعطي الدروس مجانا", "Al-hayat la tu'ati al-durus majaanan"],
  [
    "العمل في الشباب كالنقش على الحجر",
    "Al-'amal fil-shabab kal-naqsh 'ala al-hajar",
  ],
  ["البيت بيتك والحكي فش خلقك", "Al-bayt baytak wal-haki fish khilqak"],
  ["الصدقة في السر تطفئ غضب الرب", "As-sadaqah fil-sir tatfi' ghadab ar-rabb"],
  // Add more pairs as needed
];

// Function to get a random text pair
function getRandomTextPair() {
  const randomIndex = Math.floor(Math.random() * textPairs.length);
  return textPairs[randomIndex];
}

// Event listener for the button
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    const [newTextLine1, newTextLine2] = getRandomTextPair();
    document.querySelector(".textLine1").textContent = newTextLine1;
    document.querySelector(".textLine2").textContent = newTextLine2;

    // Play the bomb sound effect
    var bombSound = document.getElementById("bombSound");
    bombSound.play();
  });

document
  .getElementById("restartGameButton")
  .addEventListener("click", function () {
    window.location.href = "game1_index.html"; // Redirect to the start page
  });
