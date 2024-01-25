<script lang="ts">
  export let image: string = ''
  export let name: string = ''
  export let model: string = ''
  export let price: number = 0

  const formattedPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
</script>

<li class="flex flex-col">
  <div class="flex justify-center py-8 bg-ghost-white">
    <img src={image} alt={name} class="max-w-[225px]" />
  </div>
  <strong class="mt-6 text-base font-medium text-black font-archivo md:text-lg">
    {name}
  </strong>
  <span class="mt-3 text-base font-medium text-brand font-archivo">{model}</span>
  <strong class="mt-6 text-xl font-medium text-black font-space">{formattedPrice}</strong>
</li>
