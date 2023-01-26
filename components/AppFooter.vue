<template>
  <footer class="app-footer content-width app-padding">
    <NuxtLink :to="localePath('index')" class="app-logo">
      <Logo />
    </NuxtLink>
    <section>
      <p class="text-small">
        Via Borgonuovo 5, <br />
        40125 Bologna, Italia
      </p>
      <nav class="footer-items">
        <ul>
          <li v-for="item in props.internalLinks">
            <NuxtLink class="line" :to="localePath(`/${item.slug}`)">
              {{ $t(item.title) }}
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <slot name="default" />
        </ul>
      </nav>
      <nav class="secondary-items text-small">
        <ul>
          <li v-for="item in secondaryItems">
            <NuxtLink class="line" :to="localePath(`/${item.slug}`)">
              {{ $t(item.title) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="social-items">
        <ul>
          <li v-for="item in socialItems">
            <UiLink :url="item.url">
              <UiIcon :name="item.name" />
            </UiLink>
          </li>
        </ul>
      </nav>
      <span class="text-mini">
        ©YAC 2022 All rights reserved - Yac srl Vat No 02509200412 - R.E.A. Bo
        523578
      </span>
    </section>
    <UiButton
      class="scroll-top"
      icon="arrow-up"
      size="small"
      @click="scrollToTop()"
    />
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/assets/icons/logo.svg?component";

const props = defineProps({
  internalLinks: {
    required: true,
    type: Array<{ slug: string; title: string }>,
  },
});
const localePath = useLocalePath();
const socialItems = [
  {
    name: "instagram",
    url: "https://www.instagram.com/youngarchitectscompetitions/",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/youngarchitectscompetitions/",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/yac---young-architects-competitions/",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCkH1PgztK8JIUxyDnrDC2DA/",
  },
];
const secondaryItems = [
  { slug: "terms", title: "terms" },
  { slug: "privacy", title: "privacy" },
  { slug: "cookies", title: "cookies" },
];
</script>

<style lang="postcss">
.app-footer {
  position: relative;
  padding-top: 40px;
  padding-bottom: var(--app-margin);
  background-color: var(--white);
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    border-top: 1px solid var(--color-border);
  }

  section {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 40px;

    p {
      padding-left: 64px;
    }

    .footer-items {
      display: flex;
      flex-grow: 1;

      ul {
        flex-grow: 1;
      }
    }

    .social-items ul {
      display: flex;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      line-height: 2;

      li a {
        font-weight: var(--regular);
      }
      li a:not(.external) {
        color: var(--color-text);
      }
    }

    span {
      position: relative;
      padding: 40px 80px var(--app-margin) 0;
      color: var(--gray);
      &:before {
        content: "";
        position: absolute;
        display: block;
        top: -1px;
        left: 50%;
        width: 100vw;
        margin-left: -50vw;
        border-top: 1px solid var(--color-border);
      }
    }
  }

  .scroll-top {
    position: absolute;
    right: var(--app-margin);
    bottom: 40px;
    padding: 0 1px !important;
    color: var(--gray);
    border: 1px solid var(--gray);
    border-radius: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .app-footer section {
    flex-flow: row wrap;

    .social-items {
      margin-left: auto;

      ul {
        flex-direction: column;
      }
    }

    .secondary-items,
    span {
      order: 1;
    }

    .secondary-items {
      flex-basis: 50%;

      ul > * + * {
        margin-left: 20px;
      }

      li {
        display: inline-block;
      }
    }

    p,
    span {
      flex-basis: 50%;
      /* margin-left: auto; */
    }

    span {
      padding-top: 0;
      padding-bottom: 0;
      &:before {
        display: none;
      }
    }
  }
}
</style>
