const button = document.querySelector('.button-toggle-menu');

button.addEventListener('click', (event) => {
    event.preventDefault();
 const html = document.querySelector('html');
 
  const sidenavStatus = html.dataset.sidenavSize;
  console.log(sidenavStatus);

  html.setAttribute('data-sidenav-size', sidenavStatus === "condensed" ? "default" : "condensed");

})
const html = document.querySelector('html');
const lightDarkBtn = document.getElementById('light-dark-mode');

lightDarkBtn.addEventListener("click", (eve) => {
  console.log(lightDarkBtn);

  const ModeStatus = html.dataset.bsTheme;
  html.setAttribute('data-bs-theme', ModeStatus === "light" ? "dark" : "light");
  console.log(ModeStatus);
 
})


const layoutColorDark = document.querySelector('label[for="layout-color-dark"]');

layoutColorDark.addEventListener('click', () => {
  console.log(layoutColorDark);
  html.setAttribute('data-bs-theme', "dark");
})
const layoutColorLight = document.querySelector('label[for="layout-color-light"]');

layoutColorLight.addEventListener('click', () => {
  console.log(layoutColorLight);
  html.setAttribute('data-bs-theme', "light");
})

const layoutModeDetached = document.querySelector('label[for="data-layout-detached"]')

layoutModeDetached.addEventListener('click', () => {
  console.log(layoutModeDetached);
  html.setAttribute('data-layout-mode', "detached");
});

const layoutModeFluid = document.querySelector('label[for="layout-mode-fluid"]')

layoutModeFluid.addEventListener('click', ()=> {
   console.log(layoutModeFluid);
  html.setAttribute('data-layout-mode', "fluid");
})

const  topbarColorLight = document.querySelector('label[for="topbar-color-light"]');

topbarColorLight.addEventListener('click' , (e) => {
  console.log(topbarColorLight);
  html.setAttribute('data-topbar-color', "light");
})


const  topbarColorDark = document.querySelector('label[for="topbar-color-dark"]');

topbarColorDark.addEventListener('click' , (e) => {
  console.log(topbarColorDark);
  html.setAttribute('data-topbar-color', "dark");
})

const  topbarColorBrand = document.querySelector('label[for="topbar-color-brand"]');

topbarColorDark.addEventListener('click' , (e) => {
  console.log(topbarColorBrand);
  html.setAttribute('data-topbar-color', "brand");
})



const leftbarSizeDefault = document.querySelector('label[for="leftbar-size-default"]');

leftbarSizeDefault.addEventListener('click', (e) => {
  console.log(topbarColorBrand);
  html.setAttribute('data-sidenav-size', "default");
})

const leftbarSizeCompact = document.querySelector('label[for="leftbar-size-compact"]');

leftbarSizeCompact.addEventListener('click', (e) => {
  console.log(leftbarSizeCompact);
  html.setAttribute('data-sidenav-size', "default");
})

const leftbarSizeCondense = document.querySelector('label[for="leftbar-size-small"]');

leftbarSizeCondense.addEventListener('click', (e) => {
  console.log(leftbarSizeCondense);
  html.setAttribute('data-sidenav-size', "condensed");
})


const leftbarSizeCondenseHover = document.querySelector('label[for="leftbar-size-small-hover"]');

leftbarSizeCondenseHover.addEventListener('click', (e) => {
  console.log(leftbarSizeCondenseHover);
  html.setAttribute('data-sidenav-size', "sm-hover");
})

const leftbarSizeFull = document.querySelector('label[for="leftbar-size-full"]');

leftbarSizeFull.addEventListener('click', (e) => {
  console.log(leftbarSizeFull);
  html.setAttribute('data-sidenav-size', "full");
})


const leftbarSizeFullScreen = document.querySelector('label[for="leftbar-size-fullscreen"]');

leftbarSizeFullScreen.addEventListener('click', (e) => {
  console.log(leftbarSizeFullScreen);
  html.setAttribute('data-sidenav-size', "fullscreen");
})
const userToggle = document.getElementById('sidebaruser-check');

userToggle.addEventListener('click', (e) => {
  console.log(userToggle);
  const IsSideUser = html.dataset.sidenavUser;

  
   
   if(IsSideUser === undefined ) html.setAttribute('data-sidenav-user', true);
   else if ( IsSideUser === true) {
    html.setAttribute('data-sidenav-user', false)
   } 

   else if ( IsSideUser === false) {
    html.setAttribute('data-sidenav-user', true)
   } 
  
    console.log(IsSideUser) 
 
})



