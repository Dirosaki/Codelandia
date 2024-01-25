<script>
  import jordanLogo from 'assets/icons/logo-jordan.png'
</script>

<header>
  <div class="flex items-center justify-center bg-ghost-white">
    <strong
      class="py-3 text-sm font-medium text-black font-archivo sm:text-base lg:py-4 lg:text-xl"
    >
      Frete grátis para todo o Brasil
    </strong>
  </div>

  <div
    class="px-6 flex bg-jordan-mobile bg-no-repeat bg-cover min-[520px]:bg-jordan-tablet sm:px-8 lg:bg-jordan-desktop"
  >
    <div
      class="h-[350px] w-full grid grid-cols-[min-content_1fr] content-center lg:h-[400px] lg:min-w-[928px] lg:max-w-[1200px] lg:mx-auto"
    >
      <img
        src={jordanLogo}
        alt="Jogador de basquete com bola na mão"
        class="self-center w-6 h-6 min-h-6 min-w-6 lg:h-10 lg:w-10 lg:min-h-10 lg:min-w-10"
      />
      <span
        class="self-center ml-2 text-lg font-medium leading-6 text-white font-archivo lg:text-2xl"
        >JordanShoes</span
      >
      <h1
        class="text-2xl mt-10 mb-3 col-span-full font-archivo font-medium text-white lg:mb-5 lg:text-[32px]"
      >
        A melhor loja de Jordan
      </h1>
      <p
        class="max-w-[350px] col-span-full font-archivo text-base font-normal text-white leading-[22px] lg:max-w-[520px] lg:text-2xl"
      >
        O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador
        Michael Jordan.
      </p>
    </div>
  </div>
</header>
