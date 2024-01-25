<script>
  import Header from 'components/Header.svelte'
  import Product from 'components/Product.svelte'

  import products from 'assets/data/tennis.json'
</script>

<Header />
<main class="px-6 py-14 md:px-8 lg:py-20 lg:flex">
  <div class="flex flex-col items-center lg:flex-1 lg:max-w-[1200px] lg:mx-auto">
    <strong class="text-xl font-medium text-black font-archivo md:text-2xl lg:text-[32px]"
      >Os melhores em um só lugar
    </strong>
    <p
      class="mt-3 text-sm font-normal text-center text-black max-w-96 font-archivo md:text-base lg:mt-6 lg:text-2xl lg:max-w-[600px]"
    >
      A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que
      buscam estilo e conforto.
    </p>

    <ul
      class="flex flex-col w-full grid-cols-2 gap-10 mt-10 md:grid md:gap-x-8 md:gap-y-10 lg:grid-cols-3"
    >
      {#each products as { image, name, model, price }}
        <Product {image} {name} {model} {price} />
      {/each}
    </ul>
  </div>
</main>
