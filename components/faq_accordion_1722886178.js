Vue.component('faq_accordion_1722886178', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to common queries about our Ethereum transaction finder app</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What is the Ethereum Transaction Finder app?",
          a: "Our app is a powerful tool designed to help users discover and track new Ethereum transactions in real-time. It provides a user-friendly interface to monitor the Ethereum blockchain and stay updated on the latest network activity."
        },
        {
          q: "How does the app find new Ethereum transactions?",
          a: "The app connects directly to the Ethereum network and monitors new blocks as they're mined. It then filters and displays new transactions, allowing users to view details such as sender, recipient, amount, and gas fees."
        },
        {
          q: "Can I set up alerts for specific types of transactions?",
          a: "Yes! Our app allows you to set custom alerts based on various criteria such as wallet addresses, transaction amounts, or smart contract interactions. You'll receive notifications when transactions meeting your specified conditions occur."
        },
        {
          q: "Is the app suitable for both beginners and experienced users?",
          a: "Absolutely. We've designed the app with an intuitive interface for newcomers to easily track transactions, while also providing advanced features and data analysis tools for experienced users and developers."
        },
        {
          q: "How current is the transaction data in the app?",
          a: "Our app provides near real-time updates, typically within seconds of a transaction being included in a block. This ensures you have the most up-to-date information on Ethereum network activity."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});