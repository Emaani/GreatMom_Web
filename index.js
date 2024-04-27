document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.querySelector('.language-selector');
    const content = document.getElementById('content');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageMenu = document.querySelector('.language-menu');
    const dropdownArrow = document.querySelector('.dropdown-arrow');
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic', 'Hindi'];
    const body = document.querySelector("body");
    const toggle = document.querySelector("#toggle");
    const sunIcon = document.querySelector(".toggle .bx-sun");
    const moonIcon = document.querySelector(".toggle .bx-moon");
    const headerTitle = document.querySelector(".header-h1");
    const headerSubtitle = document.querySelector(".header-h2");

    // Function to toggle language menu
    languageSelector.addEventListener('click', function() {
        languageMenu.classList.toggle('show');
    });

    // Create language menu items
    languages.forEach(function(language) {
        const languageOption = document.createElement('span');
        languageOption.textContent = language;
        languageOption.classList.add('language-option');
        languageOption.dataset.lang = language.toLowerCase();
        languageOption.addEventListener('click', function() {
            selectedLanguage.textContent = language;
            languageMenu.classList.remove('show');
            loadContent(language.toLowerCase());
        });
        languageMenu.appendChild(languageOption);
    });

    // Function to load content based on selected language
    function loadContent(language) {
        switch (language) {
            case 'english':
                content.innerHTML = "<h1>Welcome to our website!</h1><p>This is the English version of the content.</p>";
                headerTitle.textContent = "Navigating Motherhood";
                headerSubtitle.textContent = "Because being a great mom starts with taking care of yourself!";
                break;
            case 'spanish':
                content.innerHTML = "<h1>¡Bienvenido a nuestro sitio web!</h1><p>Esta es la versión en español del contenido.</p>";
                headerTitle.textContent = "Navegando la Maternidad";
                headerSubtitle.textContent = "¡Porque ser una gran madre comienza con cuidarte a ti misma!";
                break;
            case 'french':
                content.innerHTML = "<h1>Bienvenue sur notre site web !</h1><p>Ceci est la version française du contenu.</p>";
                headerTitle.textContent = "Naviguer dans la Maternité";
                headerSubtitle.textContent = "Parce qu'être une grande mère commence par prendre soin de soi !";
                break;
            case 'german':
                content.innerHTML = "<h1>Willkommen auf unserer Website!</h1><p>Dies ist die deutsche Version des Inhalts.</p>";
                headerTitle.textContent = "Mutterschaft navigieren";
                headerSubtitle.textContent = "Denn eine großartige Mutter zu sein, beginnt damit, auf sich selbst zu achten!";
                break;
            case 'chinese':
                content.innerHTML = "<h1>欢迎来到我们的网站！</h1><p>这是中文版本的内容。</p>";
                headerTitle.textContent = "导航母亲之路";
                headerSubtitle.textContent = "因为当一个伟大的母亲开始照顾自己时！";
                break;
            case 'japanese':
                content.innerHTML = "<h1>ウェブサイトへようこそ！</h1><p>これは日本語版のコンテンツです。</p>";
                headerTitle.textContent = "母親役割を導く";
                headerSubtitle.textContent = "素晴らしい母親になるには、まず自分自身を大切にしてください";
                break;
            case 'korean':
                content.innerHTML = "<h1>웹 사이트에 오신 것을 환영합니다!</h1><p>이것은 한국어 버전의 콘텐츠입니다.</p>";
                headerTitle.textContent = "모성을 탐색하다";
                headerSubtitle.textContent = "왜냐하면 훌륭한 엄마가 되기 위해서는 먼저 자신을 돌봐야 하기 때문입니다!";
                break;
            case 'arabic':
                content.innerHTML = "<h1>مرحبًا بكم في موقعنا على الويب!</h1><p>هذا هو النسخة العربية من المحتوى.</p>";
                headerTitle.textContent = "التنقل في الأمومة";
                headerSubtitle.textContent = "لأن كون الأم العظيمة يبدأ بالعناية بنفسك!";
                break;
            case 'russian':
                content.innerHTML = "<h1>Добро пожаловать на наш веб-сайт!</h1><p>Это русская версия контента.</p>";
                headerTitle.textContent = "Навигация в материнстве";
                headerSubtitle.textContent = "Потому что быть великой мамой начинается с заботы о себе!";
                break;
            case 'hindi':
                content.innerHTML = "<h1>हमारी वेबसाइट पर आपका स्वागत है!</h1><p>यह सामग्री का हिंदी संस्करण है।</p>";
                headerTitle.textContent = "मातृत्व में भ्रमण";
                headerSubtitle.textContent = "क्योंकि एक महान माँ बनना खुद की देखभाल के साथ शुरू होता है!";
                break;
            default:
                content.innerHTML = "<h1>Welcome to our website!</h1><p>This is the default content.</p>";
                headerTitle.textContent = "Navigate the Maternity";
                headerSubtitle.textContent = "Because being a great mother begins with taking care of yourself!";
                break;
        }
    }
    

    // Dark mode toggle
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            body.classList.remove('dark');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    });

});
