<template>
  <div class="relative min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
    <!-- Global Header -->
    <LandingNavigation />
    <NuxtRouteAnnouncer />
    
    <!-- Central View Router -->
    <div class="flex-grow flex flex-col w-full relative z-0">
      <NuxtPage />
    </div>
    
    <!-- Global Footer -->
    <LandingFooter />
  </div>
</template>
