@param org.springframework.data.domain.Page<nh.recipify.domain.api.RecipeDto> recipes
@param boolean fresh = false

<div
        id="searchResult"
        class="container mx-auto mt-2 w-1/4 space-y-8 rounded-lg pb-8 pt-8"
>
    @if(!fresh)
            @if(recipes.isEmpty())
                    <div>
                            <p>Keine Treffer!</p>
                    </div>
            @endif

            @for(nh.recipify.domain.api.RecipeDto recipe:recipes)
                    @template.search.RecipeSummaryCard(recipe = recipe)
            @endfor
    @endif
</div>