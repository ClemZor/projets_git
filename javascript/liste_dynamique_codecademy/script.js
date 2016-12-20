$(document).ready(function(){
        $("#button").click(function() {
            var aAjouter = $("input[name=checkListItem]").val();
        $('.list').append('<div class="item">' + aAjouter + '</div>');
        }
        );
        
        $(document).on('click', '.item', function() {
                this.remove();}
        );
    }
);
    