// Define DOM elements

const heroImage = document.querySelector('#hero__animation__img')

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define Colors and Positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define Corner that is open
let activeCorner = '';

// An Event Listener for the window to listen for resize events
window.addEventListener('resize', handleWindowResize);

// Resizing Window Function
function handleWindowResize() {
    switch (activeCorner) {
      case "top-left":
        if (window.innerWidth <= 1100) {
          tlActive = "translateX(0) translateY(0)";
          tlContent.style.transform = "translateX(0vw) translateY(0)";
          tlContent.style.width = "100vw";
          tlContent.style.height = "100vh";
          tlContent.style.top = "0";
          tlContent.style.display = "flex";
          tlContent.style.alignItems = "center";
          tlContent.style.justifyContent = "center";
          tlContent.style.background = "var(--bg-transparent)";
          tlContent.style.zIndex = "200";
          tlBtn.style.zIndex = "300";
          trBtn.style.zIndex = "100";
          blBtn.style.zIndex = "100";
          brBtn.style.zIndex = "100";
        } else {
          tlActive = "translateX(5vw) translateY(0)";
          tlContent.style.transform = "translateX(5vw) translateY(0)";
          tlContent.style.width = "30vw";
          tlContent.style.height = "0";
          tlContent.style.top = "10vh";
          tlContent.style.display = "block";
        }
        break;
  
      case "top-right":
        if (window.innerWidth <= 1100) {
          trActive = "translateX(0) translateY(0)";
          trContent.style.transform = "translateX(0vw) translateY(0)";
          trContent.style.width = "100vw";
          trContent.style.height = "100vh";
          trContent.style.top = "0";
          trContent.style.display = "flex";
          trContent.style.alignItems = "center";
          trContent.style.justifyContent = "center";
          trContent.style.background = "var(--bg-transparent)";
          trContent.style.zIndex = "200";
          trBtn.style.zIndex = "300";
          tlBtn.style.zIndex = "100";
          blBtn.style.zIndex = "100";
          brBtn.style.zIndex = "100";
        } else {
          trActive = "translateX(-5vw) translateY(0)";
          trContent.style.transform = "translateX(-5vw) translateY(0)";
          trContent.style.width = "20vw";
          trContent.style.height = "0";
          trContent.style.top = "10vh";
          trContent.style.display = "block";
        }
        break;
  
      case "bottom-left":
        if (window.innerWidth <= 600) {
          blActive = "translateX(0) translateY(0)";
          blContent.style.transform = "translateX(0vw) translateY(0)";
          blContent.style.width = "100vw";
          blContent.style.height = "100vh";
          blContent.style.top = "0";
          blContent.style.display = "flex";
          blContent.style.alignItems = "center";
          blContent.style.justifyContent = "center";
          blContent.style.background = "var(--bg-transparent)";
          blContent.style.zIndex = "200";
          trBtn.style.zIndex = "100";
          tlBtn.style.zIndex = "100";
          blBtn.style.zIndex = "300";
          brBtn.style.zIndex = "100";
          projectOne.style.width = "70%";
          projectOne.style.margin = "auto auto 0.5rem";
          projectTwo.style.width = "70%";
          projectTwo.style.margin = "auto auto 0.5rem";
          projectThree.style.width = "70%";
          projectThree.style.margin = "auto auto 0.5rem";
        } else if (window.innerWidth <= 1100) {
          blActive = "translateX(0) translateY(0)";
          blContent.style.transform = "translateX(0vw) translateY(0)";
          blContent.style.width = "100vw";
          blContent.style.height = "100vh";
          blContent.style.top = "0";
          blContent.style.display = "flex";
          blContent.style.alignItems = "center";
          blContent.style.justifyContent = "center";
          blContent.style.background = "var(--bg-transparent)";
          blContent.style.zIndex = "200";
          trBtn.style.zIndex = "100";
          tlBtn.style.zIndex = "100";
          blBtn.style.zIndex = "300";
          brBtn.style.zIndex = "100";
          projectOne.style.width = "40%";
          projectOne.style.margin = "auto auto 0.5rem";
          projectTwo.style.width = "40%";
          projectTwo.style.margin = "auto auto 0.5rem";
          projectThree.style.width = "40%";
          projectThree.style.margin = "auto auto 0.5rem";
        }  else {
            // Code for big screens (> 1100px)
            blActive = "translateX(0) translateY(0)";
            blContent.style.transform = "translateX(0vw) translateY(0)";
            blContent.style.width = "100vw";
            blContent.style.maxHeight = "80vh"; // Set a maximum height
            blContent.style.overflowY = "auto"; 
            blContent.style.display = "flex";
            blContent.style.alignItems = "center";
            blContent.style.justifyContent = "center";
            blContent.style.background = "var(--bg-transparent)";
            blContent.style.zIndex = "200";
            trBtn.style.zIndex = "100";
            tlBtn.style.zIndex = "100";
            blBtn.style.zIndex = "300";
            brBtn.style.zIndex = "100";
        
            // Adjust the project widths to fit properly on big screens
            projectOne.style.width = "30%";
            projectOne.style.marginBottom = "10px";
            projectOne.style.marginLeft = "4px";
            projectTwo.style.width = "30%";
            projectTwo.style.marginBottom = "10px";
            projectTwo.style.marginLeft = "4px";
            projectThree.style.width = "30%";
            projectThree.style.marginBottom = "10px";
            projectThree.style.marginLeft = "4px";

            blContent.style.overflow = "auto";
            blContent.style.height = "100vh"; 
          }
          
        break;
  
      case "bottom-right":
        if (window.innerWidth <= 1100) {
          brActive = "translateX(0) translateY(0)";
          brContent.style.transform = "translateX(0vw) translateY(0)";
          brContent.style.width = "100vw";
          brContent.style.height = "100vh";
          brContent.style.bottom = "0";
          brContent.style.display = "flex";
          brContent.style.flexDirection = "column";
          brContent.style.alignItems = "center";
          brContent.style.justifyContent = "center";
          brContent.style.background = "var(--bg-transparent)";
          brContent.style.zIndex = "200";
          trBtn.style.zIndex = "100";
          tlBtn.style.zIndex = "100";
          blBtn.style.zIndex = "100";
          brBtn.style.zIndex = "300";
        } else {
          brActive = "translateX(-5vw) translateY(0)";
          brContent.style.transform = "translateX(-5vw) translateY(0)";
          brContent.style.width = "30vw";
          brContent.style.height = "0";
          brContent.style.bottom = "30vh";
          brContent.style.display = "block";
        }
        break;

        default:
        }
      }
        
// Storing last reverse animation and ready to play
let lastReverseAnimation = '';

// Play Animation Function
function playAnimation(animation, reverseAnimation) {
    // Remove all classes of animation from heroImage
    heroImage.className = '';

    if (lastReverseAnimation !== '') {
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function () {
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;

        }, 200);
    } else {
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
}


function playClosingAnimation(reverseAnimation) {
    tlBtn.innerHTML = "自己紹介";
    trBtn.innerHTML = "経験";
    blBtn.innerHTML = "プロジェクト";
    brBtn.innerHTML = "お問い合わせ";
  
    switch (activeCorner) {
      case "top-left":
        tlBtn.style.background = bgColor;
        tlBtn.style.color = textColor;
        tlContent.style.transform = tlHidden;
        break;
      case "top-right":
        trBtn.style.background = bgColor;
        trBtn.style.color = textColor;
        trContent.style.transform = trHidden;
        break;
      case "bottom-left":
        blBtn.style.background = bgColor;
        blBtn.style.color = textColor;
        blContent.style.transform = blHidden;
        break;
      case "bottom-right":
        brBtn.style.background = bgColor;
        brBtn.style.color = textColor;
        brContent.style.transform = brHidden;
        break;
  
      default:
    }
  
    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    heroImage.classList.add(reverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(reverseAnimation);
    }, 200);
  }
  
  // Onclick corner button functions
  tlBtn.onclick = function () {
    if (activeCorner === "top-left") {
      playClosingAnimation("reverse-animate-top-left");
    } else {
      trBtn.innerHTML = "経験";
      blBtn.innerHTML = "プロジェクト";
      brBtn.innerHTML = "お問い合わせ";
  
      // Setting activeCorner
      activeCorner = "top-left";
      tlBtn.innerHTML = "&uarr;<br/>自己紹介";
  
      handleWindowResize();
      playAnimation("animate-top-left", "reverse-animate-top-left");
  
      // Change background colors
      trBtn.style.background = bgColor;
      brBtn.style.background = bgColor;
      blBtn.style.background = bgColor;
      tlBtn.style.background = bgColorAlt;
  
      // Change text colors
      trBtn.style.color = textColor;
      brBtn.style.color = textColor;
      blBtn.style.color = textColor;
      tlBtn.style.color = textColorAlt;
  
      // Change positions of the corner content
      trContent.style.transform = trHidden;
      brContent.style.transform = brHidden;
      blContent.style.transform = blHidden;
      tlContent.style.transform = tlActive;
    }
  };
  
  trBtn.onclick = function () {
    if (activeCorner === "top-right") {
      playClosingAnimation("reverse-animate-top-right");
    } else {
      tlBtn.innerHTML = "自己紹介";
      blBtn.innerHTML = "プロジェクト";
      brBtn.innerHTML = "お問い合わせ";
  
      // Setting activeCorner
      activeCorner = "top-right";
      trBtn.innerHTML = "&uarr;<br/>経験";
  
      handleWindowResize();
      playAnimation("animate-top-right", "reverse-animate-top-right");
  
      // Change background colors
      trBtn.style.background = bgColorAlt;
      brBtn.style.background = bgColor;
      blBtn.style.background = bgColor;
      tlBtn.style.background = bgColor;
  
      // Change text colors
      trBtn.style.color = textColorAlt;
      brBtn.style.color = textColor;
      blBtn.style.color = textColor;
      tlBtn.style.color = textColor;
  
      // Change positions of the corner content
      trContent.style.transform = trActive;
      brContent.style.transform = brHidden;
      blContent.style.transform = blHidden;
      tlContent.style.transform = tlHidden;
    }
  };
  
  blBtn.onclick = function () {
    if (activeCorner === "bottom-left") {
      playClosingAnimation("reverse-animate-bottom-left");
    } else {
      tlBtn.innerHTML = "自己紹介";
      trBtn.innerHTML = "経験";
      brBtn.innerHTML = "お問い合わせ";
  
      // Setting activeCorner
      activeCorner = "bottom-left";
      blBtn.innerHTML = "プロジェクト<br/>&darr;";
  
      handleWindowResize();
      playAnimation("animate-bottom-left", "reverse-animate-bottom-left");
  
      // Change background colors
      trBtn.style.background = bgColor;
      brBtn.style.background = bgColor;
      blBtn.style.background = bgColorAlt;
      tlBtn.style.background = bgColor;
  
      // Change text colors
      trBtn.style.color = textColor;
      brBtn.style.color = textColor;
      blBtn.style.color = textColorAlt;
      tlBtn.style.color = textColor;
  
      // Change positions of the corner content
      trContent.style.transform = trHidden;
      brContent.style.transform = brHidden;
      blContent.style.transform = blActive;
      tlContent.style.transform = tlHidden;
    }
  };
  
  brBtn.onclick = function () {
    if (activeCorner === "bottom-right") {
      playClosingAnimation("reverse-animate-bottom-right");
    } else {
      tlBtn.innerHTML = "自己紹介";
      trBtn.innerHTML = "経験";
      blBtn.innerHTML = "プロジェクト";
  
      // Setting activeCorner
      activeCorner = "bottom-right";
      brBtn.innerHTML = "お問い合わせ<br/>&darr;";
  
      handleWindowResize();
      playAnimation("animate-bottom-right", "reverse-animate-bottom-right");
  
      // Change background colors
      trBtn.style.background = bgColor;
      brBtn.style.background = bgColorAlt;
      blBtn.style.background = bgColor;
      tlBtn.style.background = bgColor;
  
      // Change text colors
      trBtn.style.color = textColor;
      brBtn.style.color = textColorAlt;
      blBtn.style.color = textColor;
      tlBtn.style.color = textColor;
  
      // Change positions of the corner content
      trContent.style.transform = trHidden;
      brContent.style.transform = brActive;
      blContent.style.transform = blHidden;
      tlContent.style.transform = tlHidden;
    }
  };