<template>
    <div class="d-flex flex-column">
        <nav>
          <div class="nav border-bottom">
              <a class="nav-item nav-link" :class="page.navItemClass" :style="page.style" data-toggle="tab"
                  v-for="page in tabPages" :href="'#nav-'+ page.id" :key="page.id" @click="selectPage(page.id)">
                {{page.title}}
              </a>
          </div>
        </nav>
        <div class="tab-content mt-2" id="nav-tabContent">
            <div class="tab-pane fade" :class="page.tabPaneClass" :id="'nav-' + page.id" role="tabpanel" v-for="page in tabPages" :key="page.id">
                <slot :name="page.id"/>
            </div>
        </div>
      </div>
</template>

<script>
import __ from 'underscore'
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activated: {
      type: String
    }
  },
  data () {
    return {
      activatedTab: this.activated || this.tabs[0].id
    }
  },
  computed: {
    tabPages () {
      let pages = __.map(this.tabs, item => {
        let props = this.activatedTab === item.id
          ? {navItemClass: 'active text-dark font-weight-bold',
            style: 'border-bottom:2px solid orange',
            tabPaneClass: 'show active'}
          : {navItemClass: 'border-0 text-secondary'}
        return {...item, ...props}
      })
      return pages
    }
  },
  /* async created () {
    this.$emit('changed', this.activatedTab)
  }, */
  methods: {
    selectPage (pageId) {
      this.activatedTab = pageId
      this.$emit('changed', pageId)
    }
  }
}
</script>
