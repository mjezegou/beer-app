<template>
  <div class="field">
    <label class="label"
      ><slot>{{ label }}</slot></label
    >
    <div class="control">
      <input
        class="input"
        type="text"
        v-model="search"
        v-bind="$attrs"
        data-test-id="debounce-input"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    label?: string;
    debounce?: number;
    maxWait?: number;
  }>(),
  {
    debounce: 200,
    maxWait: 1000,
  }
);

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const search = ref("");

watchDebounced(
  search,
  (value) => {
    emit("change", value);
  },
  { debounce: props.debounce, maxWait: props.maxWait }
);
</script>
