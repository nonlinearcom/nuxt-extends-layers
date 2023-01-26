<template>
  <article class="modal-juror app-padding">
    <header>
      <h1>{{ props.juror.name }} {{ props.juror.lastname }}</h1>
      <h3 class="regular uppercase">{{ props.juror.company }}</h3>
      <slot />
    </header>
    <main>
      <figure>
        <div class="ratio__0-7">
          <img :src="`${useDirectusURL(props.juror.cover.id)}?height=600`"
            :alt="`${props.juror.name} ${props.juror.lastname}`" :height="props.juror.cover.height"
            :width="props.juror.cover.width" loading="lazy" />
        </div>
        <figcaption v-if="props.juror.cover?.description" class="text-small">
          {{ props.juror.cover.description }}
        </figcaption>
      </figure>
      <div v-if="props.juror.translations[0]" class="description" v-html="props.juror.translations[0]?.bio" />
    </main>
  </article>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  juror: { required: true, type: Object as PropType<Juror> }
})
</script>

<style lang="postcss">
.modal-juror {
  position: fixed;
  right: 0;
  width: min(100%, 1200px);
  height: 100vh;
  padding-top: var(--app-margin);
  padding-bottom: var(--app-margin);
  background-color: var(--white);
  overflow-y: auto;
  cursor: auto;

  header {
    margin-bottom: 160px;

    h1 {
      margin: 12px 0;
      font-size: var(--title-h2);
    }

    h3 {
      margin: 0;
      font-size: var(--text-large);
      color: var(--gray);
    }

    button {
      position: absolute;
      top: var(--app-margin);
      right: var(--app-margin);
    }
  }

  main {
    display: flex;
    flex-direction: column;

    figure {
      width: min(75%, 480px);
      margin: 0;

      figcaption {
        width: 28ch;
        color: var(--gray);
      }
    }

    .description {
      margin-top: 80px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .modal-juror main {
    flex-direction: row;

    figure {
      width: auto;
      min-width: 400px;
      order: 1;
    }

    .description {
      margin-top: 0;
      margin-right: 120px;
    }
  }
}
</style>