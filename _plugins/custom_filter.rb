module Jekyll
    module CustomFilter
        def mad_lib(input)
            return '<span class="input" data-placeholder="' +input + '"></span>'
        end
    end
end

Liquid::Template.register_filter(Jekyll::CustomFilter)