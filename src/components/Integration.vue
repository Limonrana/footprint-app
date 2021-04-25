<template>
  <section class="Category-section">
		<div class="container mx-auto p-5 mt-10">
			<div class="flex justify-between mb-4 md:mb-12">
				<div class="w-1/4">
					<router-link class="cursor-pointer" to="/integration"><!-- add  active for active on green color, and add class active-white for  -->
					<div class="step2 step after active px-1">
						<p class="color-white-2 text-xs md:text-sm font-bold">Integration</p>
					</div></router-link>
				</div><!-- add  active for active on green color, and add class active-white for  -->
				<div class="w-1/4">
					<router-link class="cursor-pointer" to="/analytics">
					<div class="step3 step after px-1">
						<p class="color-white-2 text-xs md:text-sm font-bold">Analytics</p>
					</div></router-link>
				</div>
				<div class="w-1/4">
					<router-link class="cursor-pointer" to="/product">
					<div class="step3 step after px-1">
						<p class="color-white-2 text-xs md:text-sm font-bold">Products</p>
					</div></router-link>
				</div>
				<div class="w-1/4">
					<router-link class="cursor-pointer" to="/plan-switch">
					<div class="step3 step after px-1">
						<p class="color-white-2 text-xs md:text-sm font-bold">Plan</p>
					</div></router-link>
				</div>
			</div><!-- step line -->
			<!--  -->
			<div class="md:flex justify-between">
				<h2 class="text-3xl md:text-5xl text-white font-bold mb-4 md:mb-14">Boost your brand</h2>
				<div>
					<label class="sr-only" for="currency">English</label> <select class=" border-2 color-bg-black-1 w-64 md:w-60 h-10 rounded-xl text-white focus:outline-none focus:ring focus:border-gray-200">
						<option>
							English
						</option>
						<option>
							Spain
						</option>
						<option>
							Latin
						</option>
						<option>
							German
						</option>
						<option>
							Frence
						</option>
						<option>
							Italien
						</option>
					</select>
				</div>
			</div><!-- App and Download section -->
			<div class="md:flex justify-between">
				<div class="md:w-1/2 mt-8 md:mt-0">
					<div class="w-2/2">
						<h2 class="text-white text-2xl mb-2 font-bold">App</h2>
						<p class="text-sm color-white-2">Upload your logo (400 x 200 px PNG) so you boost your brand when customers share their climate impact after their purchase on your website.</p>
					</div>
					<div class="flex border-dashed border-2 mt-8 border-gray-400 rounded-md w-2/2 md:mr-3">
						<div class="w-1/2"><img class="mt-1" src="../assets/images/mobile-image.png" width="310"></div>
						<div class="flex flex-col justify-center items-center w-1/2 color-bg-black-1 w-1/2">
							<button class="focus:outline-none text-white color-bg-green-1 py-3 px-6 font-bold rounded-2xl" type="button">Add file<span class="pl-2 text-white"><i class="fas fa-upload"></i></span></button>
							<p class="text-sm color-white-2">or drop files to upload</p><input class="invisible" id="uploadfile" type="file">
						</div>
					</div>
				</div>
				<div class="md:w-1/2 mt-8 md:mt-0">
					<div class="w-2/2 p-2">
						<h2 class="text-white text-2xl mb-2 font-bold">Marketing</h2>
						<p class="text-sm color-white-2">Download marketing material to communicate how you make your orders ClimateNeutral and display benefits for the environment and your customers.</p>
					</div>
					<div class="flex rounded-md mt-4 w-2/2 md:ml-3">
						<div class="w-1/2"><img src="../assets/images/image-for-text.png" width="310"></div>
						<div class="flex flex-col justify-center items-center w-1/2 color-bg-black-1 w-1/2">
							<a class="text-white color-bg-green-1 py-3 px-6 font-bold rounded-2xl" href="#">Download<span class="pl-2 text-white"><i class="fas fa-download"></i></span></a>
							<p class="text-sm color-white-2">or drop files to upload</p>
						</div>
					</div>
				</div>
			</div><!-- checkout info area  -->
			<div class="checkout-info-area mt-12 xl:mt-36">
				<h2 class="text-white text-2xl font-bold mb-2">Checkout</h2>
				<p class="color-white-2 text-sm w-full xl:w-1/2">Choose how you want Footprint to integrate into your website. Our simple widgets allow for a great visual integration into your store design.</p>
				<div class="mt-4 xl:mt-12 xl:flex">
					<!-- select style area -->
					<div class="w-full xl:w-2/6 xl:mr-4">
						<p class=" text-white font-bold py-4 px-2 w- my-2 my-2 rounded-xl">Select Style</p><!-- Light Select -->
						<div class="color-bg-black-1 w-my-2 rounded-xl border-color-green-1" id="light" @click="selectStyle('light')">
							<p class="flex justify-between color-bg-black-1 py-4 px-8 my-2 rounded-xl"><span class="text-white font-bold w-2/3" id="text-light">Light</span><span class=" color-white-2" id="icon-light"><i class="fas fa-check text-2xl"></i></span></p>
						</div><!-- Dark Select -->
						<div class="color-bg-black-1 w-my-2 rounded-xl border-color-green-1 border-2" id="dark" @click="selectStyle('dark')">
							<p class=" flex justify-between color-bg-black-1 py-4 px-8 my-2 rounded-xl"><span class="font-bold w-2/3 color-green-1" id="text-dark">Dark</span><span class="color-green-1" id="icon-dark"><i class="fas fa-check text-2xl"></i></span></p>
						</div><!-- Custom Select -->
						<div class="color-bg-black-1 w- my-2 rounded-xl border-color-green-1 p-4" id="custom" @click="selectStyle('custom')">
							<p class="flex justify-between p-1 my-2 font-bold text-2xl"><span class="font-bold w-2/3 text-white" id="text-custom">Custom</span><span class="text-2xl text-white" id="icon-custom"><i class="fas fa-check"></i></span></p>
							<p class=" flex justify-between text-white font-medium p-1 w- my-2 rounded-xl"><span class="text-white font-bold w-2/3">Font / Lines</span> <span class="footprintbg"><v-swatches v-model="fontColor" show-fallback popover-x="left" shapes="circles" show-border></v-swatches></span></p>
							<p class=" flex justify-between text-white font-medium p-1 my-2 rounded-xl"><span class="text-white font-bold w-2/3">Background</span><span class="footprintbg"><v-swatches v-model="background" show-fallback popover-x="left" shapes="circles" show-border></v-swatches></span></p>
						</div>
					</div><!-- priview style area -->
					<div class="w-full xl:w-4/6 xl:ml-4">
						<p class=" text-white font-bold py-4 px-2 md:px-2 my-2 rounded-xl">Preview Style</p>
                        <!-- Section Style Start -->
						<div class="dark-section">
							<div class="xl:flex p-2 xl:p-8 rounded-md mb-4" :style="{ backgroundColor: background }">
								<div class="w-full md:w-1/6 flex items-center">
									<p class="text-xl pb-2 md:pb-0 md:text-sm w-2/3 pl-2" :style="{ color: fontColor }">Card page Widget</p>
								</div>
								<div class="w-full xl:w-5/6">
									<div class="border-2 rounded-md border-gray-400 flex justify-between items-center px-2 py-2 md:py-4 md:px-8">
									<p class="text-sm w-4/6" :style="{ color: fontColor }">We made this order ClimateNeutral - for you</p><img src="../assets/images/climent-text-logo1.png" width="200"></div>
									<div class="flex justify-between pt-1">
										<a class="text-sm" href="#" :style="{ color: fontColor }">Momre details <span class="text-sm ml-1" :style="{ color: fontColor }"><i class="fas fa-angle-down"></i></span></a>
										<p class="text-sm" :style="{ color: fontColor }">All link will be shared after the purchase</p>
									</div>
								</div>
							</div>
						</div>
						<div class="xl:flex p-2 pb-4 xl:pb-0 xl:p-4 rounded-md mt-6" :style="{ backgroundColor: background }">
							<div class="w-full xl:w-1/6 flex items-center">
								<p class="pb-2 xl:pb-0 text-xl xl:text-sm w-full xl:w-2/3 pl-2" :style="{ color: fontColor }">Purchase confirmation page widget</p>
							</div>
							<div class="w-full xl:w-5/6">
								<div class="border-2 rounded-md border-gray-400 md:flex justify-between items-center py-4 px-8">
									<div class="color-bg-black-2 xl:flex justify-center items-center p-2 rounded-md"><img class="p-2" src="../assets/images/ckumate-logo.png" width="50"></div>
									<p class="text-xl text-sm w-full pb-6 md:pb-0 md:w-3/6" :style="{ color: fontColor }"><span class="color-green-1">Select</span> the climate project and <span class="color-green-1">track</span> your positive climate impact</p><a class="text-white color-bg-green-1 mb-8 md:mb-0 py-3 px-6 rounded-2xl font-bold" href="#">Let's go</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div><!-- footer button -->
			<div class="md:flex justify-between items-center mt-16 md:mt-28 mb-10">
				<img class="logo" src="../assets/images/footprintlogo.png"> <a class="color-white-2 text-sm" href="#">yourfootprint.co/business</a> <a class="color-white-2 ml-4 md:ml-4 text-sm" href="#">support@yourfootprint.co</a>
			</div>
		</div>
	</section>
</template>

<script>
import VSwatches from 'vue-swatches';

// Import the styles too, typically in App.vue or main.js
import 'vue-swatches/dist/vue-swatches.css';

export default {
  name: 'Integration',
  // eslint-disable-next-line vue/no-unused-components
  components: { VSwatches },
  data() {
    return {
      selectField: 'dark',
      background: 'black',
      fontColor: '#ffffff',
    };
  },
  methods: {
    showUpload() {
      /* integration page upload file js */
      const addFile = document.getElementById('uploadfile');
      addFile.click();
    },
    selectStyle(inputValue) {
      // Remove Old Ui
      this.removeOldUI();
      // New UI Setup
      this.setupNewUI(inputValue);
    },
    removeOldUI() {
      const oldId = this.selectField;
      // Remove All Class
      const element = document.getElementById(oldId);
      const text = document.getElementById(`text-${oldId}`);
      const icon = document.getElementById(`icon-${oldId}`);
      element.classList.remove('border-2');
      text.classList.remove('color-green-1');
      icon.classList.remove('color-green-1');
      // Other Color Add
      text.classList.add('text-white');
      icon.classList.add('text-white');
    },
    setupNewUI(inputValue) {
      // Append New Input
      this.selectField = inputValue;
      // Add All New Class
      const newId = this.selectField;
      const newElement = document.getElementById(newId);
      const newText = document.getElementById(`text-${newId}`);
      const newIcon = document.getElementById(`icon-${newId}`);
      newElement.classList.add('border-2');
      // Remove White color all class
      newText.classList.remove('text-white');
      newIcon.classList.remove('text-white');
      // add active color class
      newText.classList.add('color-green-1');
      newIcon.classList.add('color-green-1');
      this.backgoundStyle(inputValue);
    },
    backgoundStyle(inputValue) {
      if (inputValue === 'light') {
        this.background = 'transparent';
      } else if (inputValue === 'dark') {
        this.background = 'black';
      } else {
        const element = document.getElementById(inputValue);
        const bg = this.background;
        if (!element.classList.contains('border-2')) {
          this.background = 'transparent';
        } else if (bg === 'black') {
          this.background = 'transparent';
        }
      }
    },
  },
};
</script>

<style>
div#custom{
    cursor: pointer;
}
div#dark{
    cursor: pointer;
}
div#light{
    cursor: pointer;
}
span.footprintbg {
    border: 2px solid;
    border-radius: 50%;
}
.vue-swatches__trigger {
    width: 25px !important;
    height: 25px !important;
    margin-top: 0px !important;
    margin-bottom: -6px !important;
}
</style>
