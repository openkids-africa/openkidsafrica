<script setup lang="ts"></script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper !max-w-7xl">
      <div class="page-header__text-cont !min-h-20 2xl:!ml-40">
        <h1 class="page-header__caption">Programs</h1>
        <p class="page-header__subtext">
          We offer a variety of programs to help children in underserved and
          underdeveloped communities in Africa.
        </p>
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <!-- educators program and kids program -->
      <ul class="card-list grid-cols-2 gap-8 lg:grid">
        <li class="card-list__item">
          <NuxtLink to="/programs/educators">
            <DoingsCard
              :card-content="{
                id: 'educators',
                title: 'Educators Program',
                text: 'We provide free tech lessons to educators in Africa to help them teach their students better.',
              }"
            />
          </NuxtLink>
        </li>
        <li class="card-list__item">
          <NuxtLink to="/programs/kids">
            <DoingsCard
              :card-content="{
                id: 'kids',
                title: 'Kids Program',
                text: 'We provide free tech lessons to kids in Africa to help them learn better.',
              }"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
