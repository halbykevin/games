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
  [
    "قطعوا الحبل، قال الخروف مش قلتلكن",
    "Qata'oo al-habl, qal al-kharoof mish qultilkun",
  ],
  ["كل شي بوقتو حلو", "Kel chi b wa2to helo"],
  ["عم يعقد الحوت بميت صاحبه", "Aam ya'kod al-hoot bi mayyet sa7abo"],
  ["من الشببة للبابة", "Min al-shabbe ila al-labbay"],
  ["بكف الجاموس بتعرف قدو", "Bi kaff al-jamous bet'raf qaddo"],
  ["عادة الحر ما تشتكي", "Aadet al-horr ma teshteki"],
  ["المرأة الصغيرة تسوى مئة مرأة", "Al-mar'a al-sagheera teswa me'at mara"],
  ["العين ما بتكذب الغرايب", "El-ain ma betkazzeb al-gharaib"],
  ["الأيام تبي وتشوف", "El-ayyam tabbee wa tshouf"],
  ["ساكت بلا شي أحياناً أحسن", "Saket bala shi ahyanan ahssan"],
  ["الحشيش بدو تببيش", "Al-hashish baddo tabbeesh"],
  ["قبل ما تدل مشوار، تقول مشوار", "Qabel ma tdall mishwar, t2oul mishwar"],
  ["الجود بلا مود", "Al-joud bala mod"],
  ["بطل من ظهر بطل", "Batal min dahr batal"],
  ["من حبك يا حبيب، عملك عديب", "Min 7abbak ya habib, 3amalak 'adib"],
  ["شوف شوف ما تخون", "Shouf shouf ma tekhoun"],
  ["الجواز الميت زي البيت الخرب", "Al-jawaz al-mayit zay al-bayit al-kharib"],
  ["الخوف من الله، رجال", "El-khawf min allah, rigal"],
  ["ما في غير ميس الجنة", "Ma fii gher mays el-janna"],
  ["الفرح ما بدو طرح", "El-far7 ma biddo tar7"],
  ["الميت بدو جلدة", "El-mayt biddo jlede"],
  ["كل شي عند جدو عد", "Kel shi 'end jaddo add"],
  ["الحج ما يحج مع اللات شقق", "El-hajj ma yhajj ma' ellat shaqq"],
  ["المرأة وين ما طلعت، رأس ملع", "El-mar'a wen ma tal3a, ras mal'a"],
  ["الأصلوبة تطول المشوار", "Al-asloubeh to'oul al-meshwar"],
  ["مش كل من صامك بالبحر، سيب", "Mish kel man samak bel-bahr, seeb"],
  ["عقلب الشير معلب", "3a'leb el-sheer maa'leb"],
  ["من هدة لهدة", "Min hede li hede"],
  ["عند الظروف، كل شي معفو", "3end el-zorof, kel shi m3afo"],
  ["كبير وقول عم", "Kebir w 2oul 'amm"],
  ["مش عيب، عن الموت يعطو", "Mish 3eb, 3an el-mout ya3tou"],
  ["البنت بدا من بيت عمها", "El-bint bidda min beit 3amha"],
  ["السمت مالو", "El-samt malo"],
  ["زلمة بلا مال، ظلم", "Zalame bala mal, zalam"],
  ["النار ما بتطفي بالنار", "El-nar ma btotfi bel nar"],
  ["كل حبل بنتفو", "Kel habel bi ntefo"],
  ["بالهوا والشي بيعى", "Bil hawa wal chi biaa"],
  ["الكلب ما بيغير على أهلو", "El-kalb ma by3'irr 3ala ahlo"],
  ["العين ما بتكذب", "El-'ain ma betkazeb"],
  [
    "المرأة والتنور ما بتمشي لبعض",
    "El-mar'eh wa el-tannour ma btimshe la ba3d",
  ],
  ["مش كل شي بتحبك منيح", "Mish kel chi bithibbak mnee7"],
  [
    "طلي من راس الجبل ما بتشوف العلم",
    "Talli min rass el-jebal ma btshouf el-'alam",
  ],
  ["مش كل من حبك بيحبك", "Mish kil man habbak byihbak"],
  ["البعرة بتضرب بصنعها", "El-ba3ra btedrab be seneha"],
  ["مش كل من زرع، درس", "Mish kel man zara3, daras"],
  ["الحريم بالتعاريم", "El-harim bil t'arim"],
  ["يوم لك ويوم عليك", "Yom lek w yom 3alek"],
  ["الحوت ولا الموت", "El-7ot w la el-mot"],
  [
    "بدك تغير الدنيا، بدك تغير حالك",
    "Baddak t3ayyer el-dunya, baddak t3ayyer halek",
  ],
  ["ما يحرمنيش الغنة", "Ma yehremneesh el-gheneh"],
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
