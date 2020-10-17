<template>
  <div>
    <!-- header -->
    <div class="flex justify-between text-xs text-gray-700 p-2">
      <div class="flex items-center">
        <a href="https://achan.id" target="_blank" rel="noopener" class="block p-3">About</a>
      </div>
      <div class="flex items-center">
        <a href="https://achan.id" target="_blank" rel="noopener" class="block p-3"><img class="rounded-full block w-8 h-8 md:w-10 md:h-10" src="/img/achan-id.png"></a>
      </div>
    </div>

    <!-- main -->
    <div class="flex justify-center pt-20 px-5">
      <div class="flex flex-col items-center">
        <img class="w-2/3 ml-auto mr-auto mb-6" src="/img/logo.svg">
        <p class="text-center text-sm"><span class="italic">Apa pun</span> atau <span class="italic">apapun</span>? <span class="italic">Dimana</span> atau <span class="italic">di mana</span>? Apa padanan kata "new normal"?<br>Cari pakai ini saja, ketik kosa kata yang ingin kamu cari.</p>
        <div class="flex w-full md:w-2/3 border border-gray-300 rounded-full px-4 py-2 md:text-lg mt-6">
          <div>🔍</div>
          <input v-model="kosakata" @keyup.enter="submit" type="text" class="w-full outline-none px-3 ml-1" placeholder="dimana dipisah">
          <button @click="clear" v-show="kosakata.length" class="text-gray-300 hover:text-gray-600 outline-none focus:border-transparent" style="outline:0;">ｘ</button>
        </div>
        <div class="mt-8 text-center">
          <button @click="submit" class="mr-3 bg-gray-200 py-2 px-3 rounded hover:bg-gray-400 hover:border-gray-500">Cari</button>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
      <div class="flex">
        <a href="https://www.instagram.com/achan.id/" rel="noopener" target="_blank" class="block p-3">Instagram</a>
        <a href="https://twitter.com/tapitapeh" rel="noopener" target="_blank" class="block p-3">Twitter</a>
        <a href="https://www.youtube.com/channel/UCPasQ7ggBxH1zFmO53tqRZA" rel="noopener" target="_blank" class="block p-3">YouTube</a>
      </div>
      <div class="flex">
        <a href="https://trakteer.id/achan-id" rel="noopener" target="_blank" class="block p-3">Traktir</a>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      kosakata: ''
    }
  },
  methods: {
    clear() {
      this.kosakata = ''
    },
    submit() {
      if (this.kosakata.length){
        let url = `https://twitter.com/search?q=${this.kosakata}%20(from%3Aivanlanin)&src=typed_query`
        window.open(url, '_blank');
      } else {
        alert('Masukkan kata yang ingin dicari')
      }
    }
  },
}
</script>