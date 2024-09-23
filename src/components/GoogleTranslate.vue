<template>
  <div id="google_translate_element"></div>
</template>

<script>
export default {
  name: 'GoogleTranslate',
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    document.body.appendChild(script)

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'ko',
          autoDisplay: true
        },
        'google_translate_element'
      )
    }
  }
}
</script>

<style scoped>
/* Google Translate 위젯 크기 및 스타일 조정 */
#google_translate_element {
  width: 50px; /* 위젯의 너비를 더 작게 설정 */
  font-size: 14px; /* 텍스트 크기 설정 */
}

/* 로고 이미지 비율 유지 및 크기 자동 조정 */
.goog-logo-link img {
  width: auto !important; /* 로고의 너비를 작게 설정 */
  height: auto !important; /* 높이는 비율을 유지하며 자동 조정 */
  max-height: 400px; /* 로고의 최대 높이 설정 */
}
</style>
