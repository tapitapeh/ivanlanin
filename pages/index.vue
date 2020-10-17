<template>
  <div>
    <!-- header -->
    <div class="flex justify-between text-xs text-gray-700 p-2">
      <div class="flex items-center">
        <a href="https://achan.id" target="_blank" rel="noopener" class="block p-3"><img class="rounded-full block w-8 h-8 md:w-10 md:h-10" src="/img/achan-id.png"></a>
      </div>
      <div class="flex items-center">
        <a href="https://github.com/tapitapeh/ivanlanin" target="_blank" rel="noopener" class="block p-3">
          <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
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