<script setup lang="ts">
const { data, signIn, signOut } = useAuth();

const isSigning = ref<boolean>(false);

async function doSignInWithGitHub (): Promise<void> {
  if (isSigning.value) { return }

  isSigning.value = true;
  await signIn('github');
  isSigning.value = false;
}
async function doSignOut (): Promise<void> {
  if (isSigning.value) { return }

  isSigning.value = true;
  await signOut();
  isSigning.value = false;
}
</script>

<template lang="pug">
.flex.justify-center.items-center.flex-1
  .flex.flex-col.max-w-xs.bg-base-100.rounded-box.shadow-lg.p-4(
    v-if="data"
  )
    .avatar.mx-auto.mb-2
      .w-24.rounded-full.drop-shadow-md
        img(
          :src="data.user.image"
          :alt="data.user.name"
        )
    p.mb-4 Welcome, {{data.user.email}}
    nuxt-link.btn.btn-primary.mb-2(
      to="/app"
    )
      i.bi.bi-stars
      | 帮我求职
    button.btn.btn-ghost(
      type="button"
      :disabled="isSigning"
      @click="doSignOut"
    )
      span.loading.loading-spinner(v-if="isSigning")
      i.bi.bi-box-arrow-right(v-else)
      | {{isSigning ? 'Signing Out' : 'Sign Out'}}

  .max-w-xs.bg-base-100.rounded-box.shadow.p-4(v-else)
    button.btn.btn-neutral(
      type="button"
      :disabled="isSigning"
      @click="doSignInWithGitHub"
    )
      span.loading.loading-spinner(v-if="isSigning")
      i.bi.bi-github(v-else)
      | {{isSigning ? 'Signing In' : 'Sign In with GitHub'}}
</template>
