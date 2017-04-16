<template>
  <div class="db_detail">
    <!-- 返回 -->
    <div class="db_detail_back" @click="goBack"><span class="fa fa-chevron-left"></span></div>
    <detail-slider :sliders="sliders"></detail-slider>
    <!-- 名称,价格,其他 -->
    <div class="db_detail_info">
      <div class="title"></div>
    </div>
  </div>
</template>
