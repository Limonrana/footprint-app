<template>
    <section class="Category-section">
		<div class="container mx-auto  p-5 mt-10">
				<div class="flex justify-between mb-6 md:mb-28 ">
					<div class="w-1/3">
						<div class="step1 before active step  px-1">
							<h4 class="Helvetica Neue color-white-2 text-sm ">Step 1</h4>
							<p class="Helvetica Neue color-white-2 text-sm font-bold">Category</p>
						</div>
					</div>
					<div class="w-1/3">
						<div class="step2 step before px-1">
							<h4 class="Helvetica Neue color-white-2 text-sm ">Step 1</h4>
							<p class="Helvetica Neue color-white-2 text-sm font-bold">Category</p>
						</div>
					</div>
					<div class="w-1/3">
						<div class="step3 step before px-1">
							<h4 class="Helvetica Neue color-white-2 text-sm ">Step 1</h4>
							<p class="Helvetica Neue color-white-2 text-sm font-bold">Category</p>
						</div>
					</div>
				</div>
			<!-- step line -->

			<!-- selling product area -->
			<div>
				<h2 class="font-futura text-2xl md:text-5xl text-white font-bold mb-14">Which products do you sell?</h2>
				<div id="allcategory" class="flex sm:flex-wrap md:flex flex-wrap justify-between">
					<div class="w-1/2  flex justify-center mb-4 md:mb-0 md:w-1/3  xl:w-1/6">
						<!-- add active class for active -->
						<div id="general" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/box-icon.png">
							</div>
							<p class="text-white text-center">General</p>
						</div>
					</div>
					<div  class="w-1/2  flex justify-center mb-4 md:mb-0 md:w-1/3 xl:w-1/6">
						<div id="fashion" class="Category-product  w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/fashion-icon.png">
							</div>
							<p class="text-white text-center">Fashion</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0 md:w-1/3 xl:w-1/6">
						<div id="furniture" class="Category-product  w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/rack-icon.png">
							</div>
							<p class="text-white text-center">Furniture</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="beauty" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/mackup-icon.png">
							</div>
							<p class="text-white text-center">Self-Care & Beauty</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="health" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/madicin.png">
							</div>
							<p class="text-white text-center">Health & Medical</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="textiles" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/ponch-icon.png">
							</div>
							<p class="text-white text-center">Textiles</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="electronics" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/monitor-icon.png">
							</div>
							<p class="text-white text-center">Electronics</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="food" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/food-icon.png">
							</div>
							<p class="text-white text-center">Food</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="kitchen" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/mackup-2icon.png">
							</div>
							<p class="text-white text-center">Kitchen Products</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="homeAppliance" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/dracing-tab-icon.png">
							</div>
							<p class="text-white text-center">Home Appliances</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="sportsToy" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/soft-toy-icon.png">
							</div>
							<p class="text-white text-center">Sports & Toys</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="jewelery" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/gem-icon.png">
							</div>
							<p class="text-white text-center">Jewelery</p>
						</div>
					</div>
					<div class="w-1/2  flex justify-center mb-4 md:mb-0  md:w-1/3 xl:w-1/6">
						<div id="booksOffice" class="Category-product w-32 md:w-48   color-bg-black-1 rounded-2xl  h-32 md:h-48 md:m-3" @click="addCategory($event)">
							<div class="flex justify-center pt-6 md:pt-12 pb-4 md:pb-8">
								<img src="../assets/images/book-icon.png">
							</div>
							<p class="text-white text-center">Books & Office</p>
						</div>
					</div>
				</div>
			</div>
			<!-- footer button -->
		<div class="clear-both flex justify-between items-center mt-28 mb-10">
			<img class="logo" src="../assets/images/footprintlogo.png">
			<router-link class="text-white md:mr-9 color-bg-green-1 py-3 px-6 rounded-2xl" to="/scanning-result">Get started<span class="pl-2"><i class="fas fa-angle-right"></i></span></router-link>
		</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'Category',
  methods: {
    addCategory(event) {
      const targetId = event.currentTarget.id;
      const getId = document.getElementById(targetId);
      if (getId.classList.contains('active')) {
        getId.classList.remove('active');
      } else {
        getId.classList.add('active');
      }
    },
  },
};
</script>

<style>
.justify-center {
    justify-content: center !important;
}
</style>
