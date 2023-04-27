<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/textarea.json";
import { DBTextarea } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Textarea" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTextarea>{{ exampleName }}</DBTextarea>
		</template>
	</DefaultComponent>
</template>
