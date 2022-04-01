class ::Layout::Header::Component < ApplicationComponent
    include ViewComponent::SlotableV2
    renders_one :logo, ::Layout::Header::Logo::Component
end