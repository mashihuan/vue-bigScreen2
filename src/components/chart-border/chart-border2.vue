<template>
  <div>
    <svg width="680" height="240" class="dv-border-svg-container"><defs><filter id="border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2" height="150%" width="150%" x="-25%" y="-25%"><feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" /> <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" /> <feFlood result="glowColor" flood-color="#1f33a2" /> <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" /> <feMerge><feMergeNode in="softGlowColored" /> <feMergeNode in="SourceGraphic" /></feMerge></filter></defs> <polygon
      fill="transparent"
      points="
      20, 32 215, 32 235, 53
      445, 53 465, 32
      660, 32 672, 48 672, 215 660, 232
      20, 232 8, 215 8, 50
    "
    /> <polyline
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      points="
        215, 30
        20, 30 7, 50 7, 86.5
        13, 91.5 13, 171.5
        7, 176.5 7, 213
        20, 233 660, 233 673, 213
        673, 176.5 667, 171.5
        667, 91.5 673, 86.5
        673, 50 660, 30 465, 30
        445, 7 235, 7
        215, 30 235, 52
        445, 52 465, 30
      "
      stroke="#8aaafb"
    /> <polygon
      fill="transparent"
      points="
        460, 30 444, 11
        438, 11 457, 34
      "
      stroke="#8aaafb"
    /> <polygon
      fill="transparent"
      points="
        220, 30 237, 49
        243, 49 223, 26
      "
      stroke="#8aaafb"
    /> <polygon
      fill="rgba(31,51,162,0.3)"
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      points="
        454, 37 433, 11
        238, 11 226, 23
        248, 49 443, 49
      "
      stroke="#8aaafb"
    /> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="1"
      points="
        205, 37 184, 37
        190, 46 211, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="0.7"
      points="
        175, 37 154, 37
        160, 46 181, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="0.5"
      points="
        145, 37 124, 37
        130, 46 151, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="1"
      points="
        495, 37 474, 37
        468, 46 489, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="0.7"
      points="
        525, 37 504, 37
        498, 46 519, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      opacity="0.5"
      points="
        555, 37 534, 37
        528, 46 549, 46
      "
      fill="#8aaafb"
    ><animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" begin="0s" repeatCount="indefinite" /></polygon> <text x="340" y="32" fill="#fff" font-size="18" text-anchor="middle" dominant-baseline="middle" class="dv-border-box-11-title">
      dv-border-box-11
    </text> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      points="
        7, 89.5 11, 93.5
        11, 169.5 7, 173.5
      "
      fill="#8aaafb"
    /> <polygon
      filter="url(#border-box-11-filterId-85e0f9785bc642a392ed26041d6119c2)"
      points="
        673, 89.5 669, 93.5
        669, 169.5 673, 173.5
      "
      fill="#8aaafb"
    /></svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.border {
  position: absolute;
  display: block;
  &.right-top  {
    right: 0;
    transform: rotateY(180deg);
  }
  &.left-bottom {
    bottom: 0;
    transform: rotateX(180deg);
  }
  &.right-bottom {
    right: 0;
    bottom: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
